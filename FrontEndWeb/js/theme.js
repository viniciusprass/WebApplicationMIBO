// Verificar se todos os campos estão preenchidos na tela de Personal Request
function checkFieldsPersonalRequests() {
    var field1 = document.getElementById('ipPR').value.trim();
    var field2 = document.getElementById('portPR').value.trim();
    var field3 = document.getElementById('userPR').value.trim();
    var field4 = document.getElementById('passwordPR').value.trim();
    var field5 = document.getElementById('parametersPR').value.trim();
    var field6 = document.getElementById('methodPR').value.trim();
  
    if (field1 !== '' && field2 !== '' && field3 !== '' && field4 !== '' && field5 !== '' && field6 !== '') {
      document.getElementById('requestFieldsButton').disabled = false;
    } else {
      document.getElementById('requestFieldsButton').disabled = true;
    }
}
// Verificar se todos os campos estão preenchidos na tela de Reset
function checkFieldsReset(){
  var field1 = document.getElementById('ipReset').value.trim();
  var field2 = document.getElementById('passwordReset').value.trim();

  if (field1 !== '' && field2 !== '') {
    document.getElementById('resetButton').disabled = false;
  } else {
    document.getElementById('resetButton').disabled = true;
  }
}

// Verificar se todos os campos estão preenchidos na tela de Informações
function checkFieldsInfo(){
  var field1 = document.getElementById('ipInfo').value.trim();
  var field2 = document.getElementById('passwordInfo').value.trim();

  if (field1 !== '' && field2 !== '') {
    document.getElementById('infoButton').disabled = false;
  } else {
    document.getElementById('infoButton').disabled = true;
  }
}


//Tutoriais Index
function openModal() {
  var modal = document.getElementById('info');
  var overlay = document.getElementById('overlay');
  modal.style.display = 'flex';
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var modalInfo = document.getElementById('info');
  var overlay = document.getElementById('overlay');
  modalInfo.style.display = 'none';
  overlay.style.display = 'none';
  document.getElementById('preview').disabled = true;
}

// Index Theme
function scrollImages(direction) {
  const container = document.getElementById("navTutor");
  const scrollAmount = container.scrollWidth;

  container.scrollLeft += direction * scrollAmount;
}

function hiddenNextButton(){
  const nextButton = document.getElementById("nextButton");
  nextButton.style.display = "none";
  const backButton = document.getElementById("backButton");
  backButton.style.display = "flex";
}

function hiddenBackButton(){
  const backButton = document.getElementById("backButton");
  backButton.style.display = "none";
  const nextButton = document.getElementById("nextButton");
  nextButton.style.display = "flex";
}

function scrollAndToggle(direction, toggleFunction) {
  scrollImages(direction);
  toggleFunction();
}

function redirect(locate) {
  window.location.href = locate;
}