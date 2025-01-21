
import { useParams } from "react-router-dom"
const EditPage = () => {
  const { id } = useParams()
  return (
    <div>
      EditPage with ID: {id}
    </div>
  )
}

export default EditPage