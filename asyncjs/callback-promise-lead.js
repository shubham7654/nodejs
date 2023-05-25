// Lead status changer
const leadStatus = "contacted";

const leadStatusObj = {
  generated: {
    id: 1,
    message: "Hello there, Welcome!",
  },
  contacted: {
    id: 2,
    message: "How was your call experience? Are you ready to take it further!",
  },
  followup: {
    id: 3,
    message: "We contacted you, don't miss out on some great deals!",
  },
  lost: {
    id: 4,
    message: "Let us know if you change your mind!",
  },
};

// Callback practice

// const messageAction = (messageParam) => {
//   console.log(messageParam);
// }

// const displayMessageCallback = (messageAction, leadStatusObj, leadStatus) => {
//   if (leadStatus) {
//     const message = leadStatusObj[leadStatus].message;
//     messageAction(message);
//   } else {
//     console.log("Some error occured!");
//   }
// }

// displayMessageCallback(messageAction, leadStatusObj, leadStatus);

// Promise practice

const succFunc = (succMessage) => console.log(succMessage);
const errFunc = (errMessage) => console.log(errMessage);

const displayMessagePromise = (leadStatusObj, leadStatus) => {
  return new Promise((resolve, reject) => {
    if (leadStatus) {
      const message = leadStatusObj[leadStatus].message;
      resolve(message);
    } else {
      reject("Some error occured!");
    }
  });
};

displayMessagePromise(leadStatusObj, leadStatus).then(succFunc).catch(errFunc);
