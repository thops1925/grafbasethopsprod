import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getCurrentUser } from "@/lib/session"
import { redirect } from 'next/navigation'

const CreateProject = async () => {
    const session = await getCurrentUser()
    if (!session) redirect('/')
    return (
        <Modal>
            <h3 className=" md:text-5xl text-3xl font-bold text-left max-w-5xl w-full">CreateProject</h3>
            < ProjectForm type='create' session={session} />
        </Modal>
    )
}

export default CreateProject