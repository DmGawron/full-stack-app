
const btnOpen = document.querySelector('#btn-open')
const btnClose = document.querySelector('#btn-close')
const form = document.querySelector('form')
const factsList = document.querySelector('.facts-list')
// factsList.innerHTML = ''

loadFacts()
async function loadFacts() {
    const res = await fetch('https://vebmxvpnomqtjigkjolh.supabase.co/rest/v1/Facts',{
        headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlYm14dnBub21xdGppZ2tqb2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NDIxOTEsImV4cCI6MjAwOTQxODE5MX0.90lvBapXYZ6aVowg-hT6C4mR0ZZDBaJdIXI7la0OFlE',
            authorization: 
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlYm14dnBub21xdGppZ2tqb2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NDIxOTEsImV4cCI6MjAwOTQxODE5MX0.90lvBapXYZ6aVowg-hT6C4mR0ZZDBaJdIXI7la0OFlE'
        }   
    })
    const data = await res.json()
    // const filteredData = data.filter(fact => fact.category === 'history')
    console.log(res);
    console.log(data);
    createFactsList(data)
}


function createFactsList (dataArray) {
    const htmlArr = dataArray.map(fact => 
        `
        <li class="fact">
        <p>
        ${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
        </p>
        
        <span class="tag" style="background-color: #3b826f;">#${fact.category}</span>
        
        <div class="vote-buttons">
        <button>👍24</button>
            <button>🤯9</button>
            <button>⛔️4</button>
            </div>
            </li>  
            `
        )
        
        const html = htmlArr.join('')
        factsList.insertAdjacentHTML('afterbegin',html)
    }
    
    // createFactsList(initialFacts)
    
    btnOpen.addEventListener('click', () => {
        if(form.classList.contains('hidden')) {
            form.classList.remove('hidden')
            btnOpen.textContent = 'Close'
        } else {
            form.classList.add('hidden')
            btnOpen.textContent = 'Share a fact'
        }
    })
    