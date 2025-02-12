import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// LOGIN
export const singInWithFirebase = async (email, password) => {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);

    const user = response.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

// CREATE USER
export const createUserWithFirebase = async (email, password) => {
  try {
    const auth = getAuth();
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);

    const user = response.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return errorMessage;
  }
};

// LOGOUT

export const logOutUser = async () => {
  try {
    const auth = getAuth();
    await signOut(auth); // Разлогиниваем пользователя
    console.log("Пользователь успешно разлогинен.");
  } catch (error) {
    console.error("Ошибка при разлогинивании:", error.message);
  }
};
