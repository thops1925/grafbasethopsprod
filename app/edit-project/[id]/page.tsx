import { ProjectInterface } from "@/common"
import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getProjectDetails } from "@/lib/actions"
import { getCurrentUser } from "@/lib/session"
import { redirect } from 'next/navigation'

const Edit = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getCurrentUser()
    if (!session) redirect('/')

    const result = await getProjectDetails(id) as { project?: ProjectInterface }

    if (!result?.project) return (
        <p className="no-result-text">Failed to fetch project info</p>
    )
    return (
        <Modal>
            <h3 className=" md:text-5xl text-3xl font-bold text-left max-w-5xl w-full">Edit Project</h3>
            < ProjectForm type='edit' session={session} project={result?.project} />
        </Modal>
    )
}

export default Edit 