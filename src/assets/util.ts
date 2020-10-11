export const zIndexSwitch = (index) => {
  switch (index) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 2;
    case 4:
      return 1;
  }
};

export const scaleSwitch = (index) => {
  switch (index) {
    case 0:
      return 0.5;
    case 1:
      return 0.75;
    case 2:
      return 1;
    case 3:
      return 0.75;
    case 4:
      return 0.5;
  }
};

export const opacitySwitch = (index) => {
  switch (index) {
    case 0:
      return 0;
    case 1:
      return 0.8;
    case 2:
      return 1;
    case 3:
      return 0.8;
    case 4:
      return 0;
  }
};

export const transitionSwitch = (index) => {
  switch (index) {
    case 0:
      return 200;
    case 4:
      return 200;
    default:
      return 450;
  }
};

export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const isInViewport = (el) => {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 400 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
