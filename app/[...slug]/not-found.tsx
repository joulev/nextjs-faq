import { MDXContent } from "next-docs-ui/mdx";
import { DocsPage } from "next-docs-ui/page";

export default function NotFound() {
  return (
    <DocsPage>
      <MDXContent>
        <h1>404 Not Found</h1>
        <p>
          You reached the 404 page. It could mean the URL has a typo, or the page used to exist but
          is no longer available.
        </p>
        <p>
          If this page used to exist but has been removed (without a redirection), it is because the
          page content is no longer applicable with the current Next.js version and is no longer
          important. Next.js changes fast, so naturally over time many articles become outdated.
        </p>
        <p>
          If you mistyped the URL, please recheck and try again. If the URL is correct and the page
          is removed, time to go back to coding.
        </p>
      </MDXContent>
    </DocsPage>
  );
}
