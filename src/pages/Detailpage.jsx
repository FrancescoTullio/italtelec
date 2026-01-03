import { useParams } from 'react-router-dom';


function Detailpage() {


    const { slug } = useParams();
  return (
    <div>
      <h1>Detail Page</h1>
      <p>Welcome to the Detail page! Slug: {slug}</p>
    </div>
  );
}
export default Detailpage;