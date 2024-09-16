export const getSavedCharities = () => {
  const savedCharities = localStorage.getItem('saved_charities')
    ? JSON.parse(localStorage.getItem('saved_charities'))
    : [];

  return savedCharities;
};

export const saveCharityID = (charityIDArray) => {
  if (charityIDArray.length) {
    localStorage.setItem('saved_charities', JSON.stringify(charityIDArray));
  } else {
    localStorage.removeItem('saved_charities');
  }
};

export const removeCharityID = (charityID) => {
    const savedCharities = localStorage.getItem('saved_charities')
      ? JSON.parse(localStorage.getItem('saved_charities'))
      : null;

    if (!savedCharities) {
      return false;
    }

  const updatedSavedCharities = savedCharities?.filter((savedCharityID) => savedCharityID !== charityID);
    localStorage.setItem('saved_charities', JSON.stringify(updatedSavedCharities));

    return true;
};    