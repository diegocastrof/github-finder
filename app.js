const searchUser = document.querySelector('#searchUser');
const github = new Github;
const ui = new UI;

searchUser.addEventListener('keyup', showUser);



async function showUser(){
  const userText = searchUser.value;
  
  if (userText) {
    try{
      const userResponse = github.getUserData(userText);
      const userData = await userResponse;
      
      // verifica si usuario existe
      if(userData.message === 'Not Found'){
        ui.eraseProfile();
        ui.eraseRepositories();
        if (!document.querySelector('.alert')){
          ui.displayError('User not found')
        }
      } else{
        const userRepoRes = github.getUserRepos(userText);
        const userRepo = await userRepoRes;
        
        if (!!document.querySelector('#profile')){
          ui.eraseProfile();
          ui.eraseRepositories();
          ui.newProfile(userData);
          ui.newRepositoryList();
          for (let i = 0; i<5; i++){
            if (!!userRepo[i]){
              ui.newRepository(userRepo[i]);
            }
          }  
        } else{
          ui.newProfile(userData);
          ui.newRepositoryList();
          for (let i = 0; i<5; i++){
            if (!!userRepo[i]){
              ui.newRepository(userRepo[i]);
            }
          } 
        }
      }
    }
    catch (err) {
      console.log('error:' + err);
    }
  }
  else {
    ui.eraseProfile();
    ui.eraseRepositories();
  }
}
