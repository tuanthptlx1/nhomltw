
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-input").focus();
  });
function centerPlaceholder(input) {
    input.placeholder = " "; // Thiết lập placeholder thành một ký tự trắng để không hiển thị văn bản ở giữa
  }
  
  function movePlaceholder(input) {
    if (input.value === "") {
      input.placeholder = "Search..."; // Nếu ô nhập trống, hiển thị lại placeholder "Search..."
    }
  }