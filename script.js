var addButton = document.getElementById('add-btn');
    var jobList = document.getElementById('job-list');

    addButton.addEventListener('click', function() {
       var jobName = document.createElement('li');
       jobName.textContent = 'ten cong viec la ' + document.getElementById('job-name').value;
        jobList.appendChild(jobName);
var deleteButton = document.createElement('button');   
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function() {
    jobList.removeChild(jobName);
});
       jobName.appendChild(deleteButton);
    
    });