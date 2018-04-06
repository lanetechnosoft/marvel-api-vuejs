'use-strict'

const productHelper = (() => {

  /**
    * This function is responsible for returning a valid date
  */

  function getDate(data) {

    // Method in progress (not finished)
    return data;
  };

  /**
    * This role is responsible for returning a creator
  */

  function getCreator (creators, type) {
    if (creators.available > 0) {
      const editor = creators.items.filter(item => {
        if (item.role == type) {
          return item;
        }
      })

      return (editor[0]) ? editor[0].name : null;
    }

    return;
  };

  /**
    * This method return a full name with comma
    *
  */

  function inverseCreator (creator) {

    // Transform full name in array
    const nameToSplit = creator.split(' ');

    if (nameToSplit.length >= 1 && nameToSplit.length <=2) {
      return `${nameToSplit[1]}, ${nameToSplit[0]}`
    }

    return creator;
  };

  /*
    * This method finds image not availabe in path of thumbnail
    * end replace for a local picture
  */

  function validateImageNotFound (path, extension) {

    // Find image not available in path
    let findInString = path.includes('image_not_available');

    if (!findInString) {
      return `${path}.${extension}`;
    }

    return '/images/layout/image_not_found.jpg'
  };

  return {
    getDate,
    getCreator,
    inverseCreator,
    validateImageNotFound
  };

})();

export default productHelper;
