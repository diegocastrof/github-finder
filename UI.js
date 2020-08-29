class UI {

  newProfile(data){
    const div = document.createElement('div');
    div.classList.add('container','px-0', 'mb-3');
    div.setAttribute('id','profile');
    div.innerHTML = `
    <div class="profileDisplay card card-body">
        
        <div class="row">
          <div class="col-md-3">
            <img src=${data.avatar_url} class="img-fluid rounded-circle mb-3">
            <button class="btn btn-primary rounded w-100"><a href="https://github.com/${data.login}">View Profile</a></button>
          </div>
          
          <div class="col-md-9">
            
            <div class="row ml-3">
              <div class="btn btn-primary btn-sm d-inline rounded px-3 mb-1">Public Repos: ${data.public_repos}</div>
              <div class="btn btn-secondary btn-sm d-inline rounded ml-1 mb-1 px-3">Public Gist: ${data.public_gists}</div>
              <div class="btn btn-success btn-sm d-inline rounded ml-1 mb-1 px-3">Followers: ${data.followers}</div>
              <div class="btn btn-warning btn-sm d-inline rounded ml-1 mb-1 px-3">Following: ${data.following}</div>
            </div>
            
            <div class="row ml-2">
              <div class="userInformation card-body p-2 mt-4 mr-4 rounded">
                <ul class="list-group">
                  <li class="list-group-item"><strong>Company:</strong>  ${data.company}</li>
                  <li class="list-group-item"><strong>Website:</strong> ${data.blog}</li>
                  <li class="list-group-item"><strong>Location:</strong> ${data.location}</li>
                  <li class="list-group-item"><strong>Member since:</strong> ${(data.created_at).substring(0,4)}</li>
                </ul>
              </div>
            </div>

          </div>          
        </div>
      </div>
    `
    document.querySelector('.searchContainer').appendChild(div);
  }

  eraseProfile() {
    document.querySelector('#profile').remove();
  }

  newRepositoryList(){
    const div = document.createElement('div');
    div.classList.add('container','px-0');
    div.setAttribute('id','repositories');
    div.innerHTML = `
      <h3 class="mt-3">Latest Repos</h3>
    `
    document.querySelector('.searchContainer').appendChild(div);
  }

  eraseRepositories() {
    document.querySelector('#repositories').remove();
  }

  newRepository(data){
    const div = document.createElement('div');
    div.classList.add('card', 'card-body', 'px-2', 'py-3', 'mb-2');
    div.innerHTML = `
      <div class="row px-3">
        <div class="col-md-4">
          <a class="d-inline" href=${data.html_url}>${data.name}</a>
        </div>
        <div class="d-inline">
          <div class="btn btn-primary btn-sm  d-inline rounded px-3">Stars: ${data.stargazers_count}</div>
          <div class="btn btn-warning btn-sm  d-inline rounded ml-1 px-3">Watchers: ${data.watchers_count}</div>
          <div class="btn btn-success btn-sm  d-inline rounded ml-1 px-3">Forks: ${data.forks}</div>
        </div>
      </div>
    `
    document.querySelector('#repositories').appendChild(div);
  }

  displayError(message){
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-danger');
    alert.textContent = message;
    document.querySelector('.searchContainer').prepend(alert);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2000)
  }

}