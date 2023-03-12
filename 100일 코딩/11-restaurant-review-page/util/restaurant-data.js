const filePath = path.join(__dirname, "data", "restaurants.json");

/**
 * restaurants 데이터를 JSON 파일에서 읽어서 전달
 *
 * @function
 * @returns {Array} restaurant 객체의 배열
 */
function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath); // 원시 텍스트

  // 원시 텍스트 => 자바스크립트 배열
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

/**
 * restaurants 데이터를 JSON 파일에 저장
 *
 * @param {Array} storableRestaurants
 */
function storeRestaurants(storableRestaurants) {
  // 자바스크립트 배열 => 원시 텍스트 => 저장
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}
