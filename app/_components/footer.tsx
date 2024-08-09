import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <Card className="rounded-none border-none">
      <CardContent className="px-5 py-6">
        <p className="items-center text-sm text-gray-400">
          © 2024 Copyrigth{" "}
          <span className="font-bold hover:text-blue-500">
            <a
              href="https://github.com/CodeLineProjects"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              Code_line
            </a>
          </span>
        </p>
      </CardContent>
    </Card>
  )
}

export default Footer
