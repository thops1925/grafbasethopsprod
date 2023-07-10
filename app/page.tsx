import { ProjectInterface } from "@/common";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
}

type searchParams = {
  category?: string
  endcursor?: string
}

type Props = {
  searchParams: searchParams
}

// force refresh
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Home = async ({ searchParams: { category, endcursor } }: Props) => {

  const data = await fetchAllProjects(category, endcursor) as ProjectSearch
  const projectsToDisplay = data?.projectSearch?.edges || [];


  if (projectsToDisplay.length === 0) {
    return (
      <section className="flex items-center justify-start flex-col g:px-20 py-6 px-5">
        <Categories />

        <p className="w-full  my-10 px-2 text-center">No projects found, go create some first.</p>
      </section>
    )
  }


  return (
    <section className="mb-16 flex flex-col items-start justify-start px-3">
      <Categories />
      <section className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            id={node?.id}
            key={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
          />
        ))}

      </section>

      <LoadMore
        startCursor={data?.projectSearch?.pageInfo.startCursor}
        endCursor={data?.projectSearch?.pageInfo?.endCursor}
        hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage}
        hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
      />
    </section>
  );
}
export default Home;