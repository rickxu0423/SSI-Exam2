//progress-bar
function progressView(container, model) {
    function render(data) {
        let target = container.querySelector('.inner');
        target.style.width = data + '%';
    };

    container.innerHTML = '<div class="inner"></div>';
    model.subscribe(render);
    //render();
}

function progressModel() {
    let subscriber, data = 0, SPEED = 100, DURATION = 3000, interval;

    function updateData() {
        data += (SPEED / DURATION) * 100;
        data = data > 100 ? 100 : data;
        subscriber(data);
        if (data >= 100) clearInterval(interval);
    }

    interval = setInterval(updateData, SPEED);

    return {
        subscribe: function(cb) {
            if(!subscriber) subscriber = cb;
        }
    }
}

let progressBarContainer = document.querySelector('.progress-bar');

let view1 = progressView(progressBarContainer, progressModel())

//search bar
function searchView(container, model) {   
    let input = document.createElement('input'),
        options = document.createElement('div');

    input.setAttribute('type', 'text');
    options.setAttribute('class', 'options');

    container.appendChild(input);
    container.appendChild(options);

    let cb = debounce(model.fetchData, 100);

    input.addEventListener('keyup', function(e) {
        let inputText = e.target.value;

        if (!inputText) options.style.display = 'none';
        else cb(inputText);
    });

    container.addEventListener('keyup', function(e) {
        let keyCode = e.keyCode;

        if (keyCode == 38) {
            model.arrowKey('up');
        } else if (keyCode == 40) {
            model.arrowKey('down');
        } else if (keyCode == 13) {
            let selected = document.querySelector('.selected')
            if (selected) selected = selected.innerHTML;

            model.select(selected);
        }
    });

    options.addEventListener('click', function(e) {
        let selected = e.target.innerHTML;

        model.select(selected);
    })

    function render(data, selected, inputText) {
        if (inputText) input.value = inputText;

        if (!data || !data.length) {
            options.style.display = 'none';
        } else options.innerHTML = '';

        for(let i=0;i<data.length;i++) {
            let item = data[i];

            let singleOption = document.createElement('div');
            singleOption.innerHTML = item;
            
            if(i === selected) {
                singleOption.setAttribute('class', 'selected');
            }        
            options.appendChild(singleOption);
        }      
        options.style.display = 'block';
    }

    model.subscribe(render);
}

function searchModel() {
    let subscriber, cache = {}, data, selected = -1;

    function fetchData(text) {
        if (cache[text]) {
            apiBack(cache[text]);
        } else {
            fetch(`https://swapi.co/api/people/?search=${text}`)
            .then(res => res.json())
            .then(function(json) {
                cache[text] = json;
                apiBack(json);
            })
        }
    }

    function apiBack(json) {
        let names = json.results.map(function(item) {
            return item.name;
        });

        data = names;

        subscriber(data, selected);
    }

    function arrowKey(direction) {
        if (direction == 'down') {
            selected ++;
            selected = selected > data.length-1 ? data.length-1 : selected;
        } else if (direction == 'up') {
            selected --;
            selected = selected < -1? -1 : selected;
        }
        subscriber(data, selected);
    }

    function select(selectedText) {
        selected = data.indexOf(selectedText);
        subscriber(data, selected, selectedText);
    }

    return {
        subscribe: function(cb) {
            if(!subscriber) subscriber = cb;
        },
        fetchData: fetchData,
        arrowKey: arrowKey,
        select: select
    }
}

function debounce(fn, wait) {
    let timer;

    return function() {
        const context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(context, args), wait)
    }
}

let searchContainer = document.querySelector('.search-container');

searchView(searchContainer, searchModel());

//autocomplete
const optionList = [
                    'CA',
                    'AZ',
                    'WA',
                    'NY',
                    'OR',
                    'TX',
                    'TS',
                    'ML',
                    'MX'
                    ];


function autocompleteView(container, model) {
    let input = document.createElement('input'),
        options = document.createElement('div');

    input.setAttribute('type', 'text');
    options.setAttribute('class', 'options');
    
    container.appendChild(input);
    container.appendChild(options);

    input.addEventListener('keyup', function(e) {
        let inputText = e.target.value;

        if (!inputText) options.style.display = 'none';
        else model.getOptions(inputText);
    });

    function render(data) {
        if (!data || !data.length) options.style.display = 'none';
           
        options.innerHTML = '';

        for (option of data) {
            let singleOption = document.createElement('div');
            singleOption.innerHTML = option;
            options.appendChild(singleOption);
        }

        options.style.display = 'block';
    }

    model.subscribe(render);
}

function autocompleteModel() {
    let subscriber;

    function getOptions(key) {
        let result = [],
            text = key.toUpperCase();

        if (text) {
            for (let option of optionList) {
                if (option.indexOf(text) > -1) result.push(option);
            }
        }

        subscriber(result);
    }

    return {
        subscribe: function(cb) {
            if (!subscriber) subscriber = cb;
        },
        getOptions: getOptions
    }
}

let autocompleteContainer = document.querySelector('.autocomplete-container');

autocompleteView(autocompleteContainer, autocompleteModel());

//Whack A Mole
function moleView(container, model) {
    let grid = document.createElement('div'), 
        scoreBoard = document.createElement('div');
    
    grid.setAttribute('class', 'grid');
    scoreBoard.setAttribute('class', 'score-board');

    container.appendChild(grid);
    container.appendChild(scoreBoard);

    function render(data) {

        const ROW = 3, COL = 3;

        let {score, count} = data;
        
        grid.innerHTML = '';

        if (count < 10) {
            let random = getRandomNum(0, ROW*COL);

            grid.appendChild(createCells(ROW, COL, random));
        } else {
            grid.innerHTML = 'Final Score: ' + score
        }

        scoreBoard.innerHTML = 'Score: ' + score;
    }

    grid.addEventListener('click', (e) => {
        if (e.target.className.toLowerCase() !== 'cell') return;

        let val = e.target.innerHTML;

        model.click(val ==='M');

    });

    model.subscribe(render);

    render(model.getData());

}

function moleModel() {
    let subscriber, data = {score: 0, count: 0};

    function getData() {
        return data
    }

    function click(add) {
        data.score += add ? 1 : 0;
        data.count ++;

        subscriber(data);
    }

    return {
        subscribe: function(fn) {
            if (!subscriber) subscriber = fn;
        },
        getData: getData,
        click: click,
    }

}

function createCells(row, col, random) {
    let grid = document.createElement('div');
    grid.setAttribute('class', 'grid');

    for (let i = 0; i < row*col; i++) {
        let cell = document.createElement('div');
        if (random && i == random[0]) {
            cell.innerHTML = 'M';
            random.shift();
        }
        cell.setAttribute('class', 'cell');
        grid.appendChild(cell);
    }
    return grid
}

function getRandomNum(min, max) {
    let result = [];
    while (result.length < 3) {
        let random = Math.floor(Math.random() * (+max - +min)) + +min;
        if (!result.includes(random)) result.push(random);
    }
    result.sort( (a ,b)=> a - b )
    return result
}

let moleContainer = document.querySelector('.mole-container');

moleView(moleContainer, moleModel());
