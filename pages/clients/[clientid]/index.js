import { useRouter } from "next/router";

function ClientsClientIndexPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[clientid]/[clientprojectid]",
      query: { clientid: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The selected client index page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsClientIndexPage;
