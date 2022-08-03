document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'salmon';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = 'purple';
}

document.getElementsByTagName('h3')[2].style.backgroundColor = 'black';
document.getElementsByTagName('h3')[3].style.backgroundColor = 'black';
document.getElementById('footer-container').style.backgroundColor = 'rgba(0, 41, 25, 0.9)';
document.getElementById('header-container').style.backgroundColor = 'green';