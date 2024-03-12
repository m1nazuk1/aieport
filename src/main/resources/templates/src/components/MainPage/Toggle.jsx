import './MainPageStyles.css'

export default function Toggle() {
    function viewReturning() {
        document.getElementById('back').classList.toggle('active')
    }

    return (
        <div id='toggle'>
            <span id='one-way-text'>One way</span>
            <label className='switch'>
                <input type="checkbox" className='switch-input' onChange={viewReturning} />
                <span className='switch-slider'></span>
            </label>
            <span id='returning-text'>Returning</span>
        </div>
    )
}