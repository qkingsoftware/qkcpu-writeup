import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        QKing's Devcorner
      </h1>
      <p className="mb-4">
        {`I am a dutch developer who has a fascination for computers and everything around it.
        I have landed on programming really quickly because of that and I ain't stopping anytime soon!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
