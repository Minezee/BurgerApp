import { Link } from "react-router-dom"
import Button from "../../components/Button"

const listCTA = [
  {
    name: "Order Now",
    link: "/order",
    variant: "primary",
  },
  {
    name: "About Us",
    link: "/about",
    variant: "secondary",
  },
  {
    name: "Order Now",
    link: "/order",
    variant: "secondary",
  }
]
const HomeBtnList = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center gap-4 mx-auto">
          {listCTA.map(data => (
            <Link key={data.name} className="bg-white border-2 border-green-500 hover:bg-green-300 rounded-lg w-40 py-2 flex itemscenter justify-center" to={data.link}>
              {data.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBtnList