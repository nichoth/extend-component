var View = React.createClass({
  render: function () {
    function handleClick (ev) {
      ev.preventDefault()
      this.props.onAction({
        type: '1'
      })
    }

    return (<div>
      <button onClick={handleClick.bind(this)}></button>
    </div>)
  }
})


// return the return value from the handler or the event


function onActA (ev) {
  test.equal(ev.type, '1', 'should have the first event')
  return { type: '2' }
}

function onActB (ev) {
  test.equal(ev.type, '2', 'should have the second event')
  return { type: '3' }
}

var A = Extend(View, { onAction: onActA })
var B = Extend(A, { onAction: onActB })

<B onAction={onAction} />

function onAction (ev) {
  test.equal(ev.type, '3', 'should have the third event')
}
