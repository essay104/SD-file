const updateProfile = (userData) => {
  const name = document.querySelector(".name");
  const email = document.querySelector(".email");
  const website = document.querySelector(".website");

  name.innerText = `${userData.name} (@${userData.username})`;
  email.innerText = userData.email;
  email.href = `mailto:${userData.email}`;
  website.innerText = userData.website;
  website.href = `https://${userData.website}`;
  website.target = "_blank"
};

const getUserById = () => {
  const URL = "";

  return fetch(URL)
    .then((Response) => Response.json())
    .then((data) => data);
};

const loadUserProfile = async () => {
  const userId = localStorage.getItem("userId");
  const userData = await getUserById(userId);
};

loadUserProfile();
