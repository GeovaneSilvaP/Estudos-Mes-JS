// Async e Await
async function buscarUsuariosGitHub(usuario) {
  try {
    const response = await fetch(`https://api.github.com/users/${usuario}`);

    if (!response.ok) {
        throw new Error("Usuário não encontrado");
    }

    const data = await response.json()

    console.log("Usuário encontrado:");
    console.log("Login:", data.login);
    console.log("Repositórios públicos:", data.public_repos);

    const resRepos = await fetch(data.repos_url)
    const repostData = await resRepos.json();

    console.log("\nPrimeiros 5 repositórios:");
    repostData.slice(0, 5).forEach((repo, index)=>{
        console.log(`${index + 1}. ${repo.name}`);
        
    })
    
    
  } catch (error) {
    console.log("Error", error.message);
    
  }
}

buscarUsuariosGitHub("octocat")