import { useLocation, useParams, useSearchParams } from "react-router-dom"

function ProductDetail() {
    const params = useParams();
    const location = useLocation();
    const [searchParams,setSearchParams] = useSearchParams();

    console.log(searchParams.get('id'));
    
  return (
    <>
        <div>Producto:{params.id}</div>
    </>
  )
}

export default ProductDetail