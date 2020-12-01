$darkMode = false

if (localStorage.getItem('defaultTheme') == 'dark') {
 toggleDarkMode()
}

function toggleDarkMode(){
 if ($darkMode == false){
  document.body.style.backgroundColor = "rgb(85, 87, 86)"
  document.body.style.color = "White"
  document.body.style.color = "White"
  document.getElementById("themeInfo").innerHTML = "Dark!"
  localStorage.setItems('defaultTheme', 'dark');
  $darkMode = true
 } else {
  document.body.style.backgroundColor = "White"
  document.body.style.color = "Black"
  document.p.style.color = "Black"
  document.getElementById("themeInfo").innerHTML = "Light!"
  localStorage.setItems('defaultTheme');
  $darkMode = false
 }
}

$normalMode = false

if (localStorage.getItem('defaultTheme') == 'normal') {
 toggleNormalMode()
}

function toggleNormalMode(){
 if ($darkMode == false){
  document.body.style.backgroundColor = "#a6a6a6"
  document.body.style.color = "White"
  document.body.style.color = "#333"
  document.getElementById("themeInfo").innerHTML = "Normal!"
  localStorage.setItems('defaultTheme', 'normal');
  $normalMode = true
 } else {
  document.body.style.backgroundColor = "White"
  document.body.style.color = "White"
  document.p.style.color = "White"
  document.getElementById("themeInfo").innerHTML = "Light!"
  localStorage.setItems('defaultTheme');
  $normalMode = false
 }
}