// type objectEvent = {
//   type: string,
//   detail:{}
// }

// function trigger (element:HTMLElement, eventData:CustomEvent|Event|{}|string) {
//   if (typeof eventData ==='string') {
//     eventData = { type: eventData };
//   }
//   element.dispatchEvent(customEvent);
// }


// const customEvent = new CustomEvent('myCustomEvent', {
//     detail: { message: '이것은 커스텀 이벤트입니다!' },
//     bubbles: true,
//     cancelable: true
//   });
//   myElement.dispatchEvent(customEvent);