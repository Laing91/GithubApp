let getUser = async function (username) {
    try {
      let response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status !== 200) 
      {
        throw "Error";
      }
      return await response.json();
    }
    catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  let renderUser = async function () {
    let username = document.getElementById("input").value;
    let user = await getUser(username);
    console.log(user);
    document.querySelector(".title").innerHTML = user.name + " - " + user.login;
    document.querySelector(".images").setAttribute('src', user.avatar_url);
    document.querySelector(".category").innerHTML = `Public Repos: ${user.public_repos}`;
    document.querySelector(".githubLink").innerHTML = user.html_url;
  }