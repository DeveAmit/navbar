function showContent(contentId) {
    var contentDivs = document.querySelectorAll('#content > div');
    for (var i = 0; i < contentDivs.length; i++) {
      contentDivs[i].style.display = 'none';
    }
    
    var selectedDiv = document.getElementById(contentId);
    selectedDiv.style.display = 'block';
  }