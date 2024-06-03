import messaging from "@react-native-firebase/messaging";
import { PermissionsAndroid, Platform } from "react-native";
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
  if (Platform == "android") {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
  }
}
async function GetToken() {
  if (requestUserPermission()) {
    messaging()
      .getToken()
      .then((token) => {
        console.log(token);
      });
  } else {
    console.log("permission granted");
  }
}

export { requestUserPermission, GetToken };
