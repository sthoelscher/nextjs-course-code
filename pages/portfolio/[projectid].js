import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // use the router.query to get the projectid and send a request to the backend API to fetch the project with the id of projectid

  return (
    <div>
      <h1>The Portfolio Project {router.query.projectid} Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
