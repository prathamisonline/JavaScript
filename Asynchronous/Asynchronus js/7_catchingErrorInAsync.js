const githubUser = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/prathamisonlines"
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
  } catch (error) {
    alert("Could not fetch user, try resetting your connection");

    console.error(error);
  }
};
githubUser();
