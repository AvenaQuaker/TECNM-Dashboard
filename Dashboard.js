    //Type global variable declaration
    let DataWidget;
    let Percentage;
    let Months = ['Enero','Ferbero','Marzo','Abril','Mayo','Junio','Julio','Septiembre','Octubre','Noviembre','Diciembre']
    let colores = ['#DBF6FD', '#fddbdb', '#fdebdb', '#fdfbdb', '#e7fddb','#dbfde8','#dbfdf7','#dbeffd','#dbe4fd','#efdbfd','#fddbf8'];
    let DateNow = new Date()

    //Type global HTML obteinment
    let grid = document.getElementById("grid");
    let Form = document.querySelector('.form-box')
    let deletionBox = document.querySelector('.deletion-box')
    let modifyBox = document.querySelector('.modify-box')
    let deleteBox = document.getElementById("deleteBoxWidget");
    let Projects = document.getElementById('navImg1')
    let Charts = document.getElementById('navImg2')
    let Metrics = document.getElementById('navImg3')
    let Dates = document.getElementById('navImg4')
    let Settings = document.getElementById('navImg5')
    let ProjectsInprogress = document.getElementById('PIP')
    let ProjectsUpcoming = document.getElementById('PUP')
    let ProjectsTotal = document.getElementById('PT')

    //Actualdate reception
    let FormatDate = Months[DateNow.getMonth()] + ' ' + DateNow.getDate()
    let actualDate= document.getElementById('actualDate').textContent = FormatDate;

    //Method that delays the re-direction of the destination-page
    function Loading(url){
        document.querySelector('.overlay').style.display = 'block';
        setTimeout(function(){
            window.location.href = url;
        }, 2000);
    }

    //Method that manages the insertion of containers in the data-layout dinamic Grid
    document.getElementById('ABW').addEventListener('click',()=>{
        var formElement = document.querySelector('.form');

        if(!formElement.checkValidity()){
            alert('Por favor, completa todos los campos requeridos.');

        }
        else
        {
            var formData = new FormData(formElement);
            var Title = formData.get('WTitle')
            var Desc = formData.get('WDesc')
            var Days = formData.get('WDays')
            var Type = formData.get('WType')

            const DataLayout = document.getElementById('data-layout')

            //Grid dinamic expansion
            if(grid.children.length == 4) DataLayout.style.height = "90vh"
            if(grid.children.length == 6) DataLayout.style.height = "135vh"
            if(grid.children.length == 7) DataLayout.style.height = "110vh"
            if(grid.children.length == 8) DataLayout.style.height = "95vh"
            if(grid.children.length == 9) DataLayout.style.height = "140vh"

            if(grid.children.length == 10) return

            //Element creation
            const widget = document.createElement("div");
            const interWidgetDate = document.createElement("div");
            const IWDLeft = document.createElement("div");
            const IWDRight = document.createElement("div");

            const IWDRight2 = document.createElement("div")

            const widgetTitle = document.createElement("div");
            const widgetMsg = document.createElement("div");
            const midWidget = document.createElement("div");
            const widgetProg = document.createElement("span");
            const widgetPerc = document.createElement("span");
            const lowmidWidget = document.createElement("div");
            const progressBar = document.createElement("div");
            const lowWidget = document.createElement("div");
            const lowWidgetLeft = document.createElement("div");
            const usernameImage102 = document.createElement("div");
            const usernameImage103 = document.createElement("div");
            const usernameImage104 = document.createElement("img");
            const lowWidgetRight = document.createElement("div");
            const widgetDays = document.createElement("span");

            //ID assingation

            //Class assignation
            widget.classList.add("widget");
            widget.style = `view-transition-name: b${grid.children.length}`;
            interWidgetDate.classList.add("interWidgetDate");
            IWDLeft.classList.add("IWDLeft");
            IWDRight.classList.add("IWDRight");
            IWDRight2.classList.add("IWDRight2");
            widgetTitle.classList.add("widgetTitle");
            widgetMsg.classList.add("widgetMsg");
            midWidget.classList.add("midWidget");
            widgetProg.classList.add("widgetProg");
            widgetPerc.classList.add("widgetPerc");
            lowmidWidget.classList.add("lowmidWidget");
            progressBar.classList.add("progressBar");
            lowWidget.classList.add("lowWidget");
            lowWidgetLeft.classList.add("lowWidgetLeft");
            usernameImage102.classList.add("username-image-102");
            usernameImage103.classList.add("username-image-103");
            usernameImage104.classList.add("username-image-104");
            lowWidgetRight.classList.add("lowWidgetRight");
            widgetDays.classList.add("widgetDays");
        
            //Styles modification
            widget.style.background = RandomColor();

            //ProgressBar
            function move(initial, total) {
                var width = 0;
                var id = setInterval(frame, 10);
                Percentage = (initial/total)*100
                function frame() {
                    if (width >= Percentage) {
                        clearInterval(id);
                    } else {
                        width++; 
                        progressBar.style.width = width + '%'; 
                    }
                    }
                }
            //ProgressBarTest (Insert Actual Number, Total Number)
            move(Math.floor(Math.random() * 10) + 1, 10); 

            //Content addment
            IWDLeft.textContent = actualDate;
            widgetTitle.textContent = Title;
            widgetMsg.textContent = Desc;
            widgetDays.textContent = Days + " Days Left";
            widgetProg.textContent = "Progress";
            widgetPerc.textContent = Percentage + '%';

            //Event managment
            IWDRight.addEventListener('click', (event)=> {
                const clickedBox = event.target;
            
                const newPosition = clickedBox.getBoundingClientRect();
                deleteBox.style.top = `${newPosition.top*0.9}px`;
                deleteBox.style.left = `${newPosition.right*1.01}px`;
                
                deleteBox.style.opacity = "1";
                deleteBox.style.pointerEvents = 'auto';

                const widget = event.target.closest(".widget");
                if (widget) {
                    const indice = Array.from(widget.parentNode.children).indexOf(widget) + 1;
                    DataWidget = indice;
                }
            })

            IWDRight2.addEventListener('click',(event)=>{
                modifyBox.style.opacity = "1";
                modifyBox.style.pointerEvents = 'auto';
                Form.style.opacity = '0';
                Form.style.pointerEvents = 'none';

                const widget = event.target.closest(".widget");
                if (widget) {
                    const indice = Array.from(widget.parentNode.children).indexOf(widget) + 1;
                    console.log("Contenedor seleccionado por el botón:", indice);
                    DataWidget = indice;
                }
            })

            //Elements Insertion
            interWidgetDate.appendChild(IWDLeft);
            interWidgetDate.appendChild(IWDRight);
            interWidgetDate.appendChild(IWDRight2);
            midWidget.appendChild(widgetProg);
            midWidget.appendChild(widgetPerc);
            lowmidWidget.appendChild(progressBar);
            lowWidgetLeft.appendChild(usernameImage102);
            lowWidgetLeft.appendChild(usernameImage103);
            lowWidgetLeft.appendChild(usernameImage104);
            lowWidgetRight.appendChild(widgetDays);
            lowWidget.appendChild(lowWidgetLeft);
            lowWidget.appendChild(lowWidgetRight);
            widget.appendChild(interWidgetDate);
            widget.appendChild(widgetTitle);
            widget.appendChild(widgetMsg);
            widget.appendChild(midWidget);
            widget.appendChild(lowmidWidget);
            widget.appendChild(lowWidget);
        
            document.startViewTransition
                ? document.startViewTransition(() => grid.appendChild(widget))
                : grid.appendChild(widget);

            document.querySelector('.form-box').style.opacity = '0';
            Form.style.pointerEvents = 'none';
            ClearForm()
        }

        Update()
    })

    //Method that manages the removal of containers in the dataLayout dinamic grid
    function removeBox(child) {
    const DataLayout = document.getElementById('data-layout')

        //Grid dinamic expansion
        if(grid.children.length == 5) DataLayout.style.height = "80vh"
        if(grid.children.length == 6) DataLayout.style.height = "95vh"
        if(grid.children.length == 7) DataLayout.style.height = "95vh"
        if(grid.children.length == 8) DataLayout.style.height = "140vh"
        if(grid.children.length == 9) DataLayout.style.height = "120vh"
        if(grid.children.length == 10) DataLayout.style.height = "95vh"
        
        const box = grid.querySelector(`:scope > :nth-child(${child})`);
    
    document.startViewTransition
        ? document.startViewTransition(() => grid.removeChild(box))
        : grid.removeChild(box);
    }

    //Managment methods that controls the Widget Insertion box
    document.getElementById('addBox').addEventListener('click',()=>{
        modifyBox.style.opacity = '0'
        modifyBox.style.pointerEvents = 'none'

        Form.style.opacity = '1';
        Form.style.pointerEvents = 'auto';
    })
    document.getElementById('CBW').addEventListener('click',()=>{
        Form.style.opacity = '0';
        Form.style.pointerEvents = 'none';
        ClearForm()
    })

    //Methods that manages the actions of the Widget Deletion box
    document.getElementById('rethinkDeletion').addEventListener('click',()=>{
        deletionBox.style.opacity = '0';
        deletionBox.style.pointerEvents = 'none';
    })
    document.getElementById('acceptDeletion').addEventListener('click',()=>{
        deletionBox.style.opacity = '0';
        deletionBox.style.pointerEvents = 'none';
        removeBox(DataWidget)
        Update()
    })
    //Methods that controls the Widget modification box
    document.getElementById('cancelModify').addEventListener('click',()=>{
        modifyBox.style.opacity = '0';
        modifyBox.style.pointerEvents = 'none';
    })
    document.getElementById('acceptModify').addEventListener('click',(t)=>{
        const widget = grid.children[DataWidget]
        

        modifyBox.style.opacity = '0';
        modifyBox.style.pointerEvents = 'none';
        ClearForm()
    })
    
    //Method that returns a random color
    function RandomColor() {
        return (colores[Math.floor(Math.random() * colores.length)])
    }

    //Method that clears all the inputs in a form
    function ClearForm() {
        var inputs = document.querySelectorAll('.form input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    }

    //Method that loads all the information assets and controls the reloading of main page
    function Start(){

    }

    //Method that updates all the current data
    function Update() {
        ProjectsInprogress.textContent = grid.children.length + 1;
        ProjectsUpcoming.textContent = grid.children.length + 4;
        ProjectsTotal.textContent = parseInt(ProjectsInprogress.textContent) + parseInt(ProjectsUpcoming.textContent);
    }



