import { ProjectInterface } from '@/common'
import Modal from '@/components/Modal'
import ProjectActions from '@/components/ProjectActions'
import RelatedProjects from '@/components/RelatedProjects'
import { getProjectDetails } from '@/lib/actions'
import { getCurrentUser } from '@/lib/session'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getCurrentUser()
    const result = await getProjectDetails(id) as { project?: ProjectInterface }

    if (!result?.project) return (
        <p className="no-result-text">Failed to fetch project info</p>
    )

    const projectDetails = result?.project

    const renderLink = () => `/profile/${projectDetails?.createdBy?.id}`

    return (
        <Modal>
            <section className='flex justify-between gap-y-8 max-xs:flex-col w-full'>
                <div className='flex-1 flex items-start gap-5 w-full max-xs:flex-col'>
                    <Link href={renderLink()}>
                        <Image
                            src={projectDetails?.createdBy?.avatarUrl}
                            width={50}
                            height={50}
                            alt="profile"
                            className="rounded-full border-2 border-sky-500 "
                        />
                    </Link>
                    <div className='flex-1 flex items-start justify-start flex-col gap-1'>
                        <p className='self-start text-lg font-semibold'>{projectDetails.title}</p>
                        <div className='flex flex-wrap whitespace-nowrap text-sm font-normal gap-2 w-full'>
                            <Link href={renderLink()}>
                                {projectDetails.createdBy?.name}
                            </Link>
                            <Image src="/dot.svg" width={4} height={4} alt="dot" />

                            <Link href={`/?category=${projectDetails.category}`}
                                className="text-sky-500 font-semibold">
                                {projectDetails?.category}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* show if your the user */}
                {session?.user?.email === projectDetails?.createdBy?.email && (
                    <div className="flex justify-end items-center gap-2">
                        <ProjectActions projectId={projectDetails?.id} />
                    </div>
                )}
            </section>

            <section className="mt-14">
                <Image
                    src={`${projectDetails?.image}`}
                    className="object-cover rounded-2xl blur-0"
                    width={800}
                    height={800}
                    alt="poster"
                />
            </section>

            <section className="flex items-center justify-center flex-col mt-20">
                <p className="max-w-5xl text-xl font-normal">
                    {projectDetails?.description}
                </p>

                <div className="flex flex-wrap mt-5 gap-5">
                    <Link href={projectDetails?.githubUrl}
                        target="_blank" rel="noreferrer"
                        className="flexCenter gap-2 tex-sm font-medium text-primary-purple">
                        🖥 <span className="underline">Github</span>
                    </Link>
                    <Image src="/dot.svg" width={4} height={4} alt="dot" />
                    <Link href={projectDetails?.liveSiteUrl}
                        target="_blank" rel="noreferrer"
                        className="flexCenter gap-2 tex-sm font-medium text-primary-purple">
                        <span className="underline">Live Site</span>
                    </Link>
                </div>
            </section>

            <section className="flex items-center justify-center     w-full gap-8 mt-28">
                <span className="w-full h-0.5 bg-light-white-200" />
                <Link href={renderLink()} className="min-w-[82px] h-[82px]">
                    <Image
                        src={projectDetails?.createdBy?.avatarUrl}
                        className="rounded-full"
                        width={82}
                        height={82}
                        alt="profile image"
                    />
                </Link>
                <span className="w-full h-0.5 bg-light-white-200" />
            </section>

            <RelatedProjects
                userId={projectDetails?.createdBy?.id}
                projectId={projectDetails?.id}
            />

        </Modal>
    )
}

export default Project