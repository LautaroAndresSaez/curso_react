import React from 'react'

const FancyInput = React.forwardRef( (props, ref) => (
    <div>
        <input ref = { ref} />
    </div>
) )

export default FancyInput;