import { sanityClient } from "../utils/sanityClient"
import { Article } from "../components/Article"

const Property = ({ article }) => {
  console.log("article", article)

  return <Article content={article?.content} />
}

export async function getServerSideProps() {
  const article = await sanityClient.fetch('*[_type == "documentArticle" && handle.current == "property"][0]')

  return {
    props: {
      article
    }
  }
}

export default Property
