import { useRouter } from "next/router";

export default function ProductItem() {
  const router = useRouter()
  
  return(
    <h3>{router.query.id}</h3>
  )
}