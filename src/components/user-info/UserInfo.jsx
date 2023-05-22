import React from 'react'

import './user-info.scss'
// import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const Userinfo = ({user}) => {
  return (
    <div className='user-info'>
        <div className="user-info__img">
            <img src={user.img} alt="" />
        </div>
        <div className="user-info__name">
            {/* <Button
              id="PopoverLegacy"
              type="button"
            > */}
              <span>{user.name}</span>
            {/* </Button>
            <UncontrolledPopover
              placement="bottom"
              target="PopoverLegacy"
              trigger="legacy"
            >
              <PopoverHeader>
                Focus Trigger
              </PopoverHeader>
              <PopoverBody>
                Focusing on the trigging
              </PopoverBody>
            </UncontrolledPopover> */}
        </div>
        {/* <div>
          <span>{user.phoneNumber}</span>
        </div> */}
    </div>
  )
}

export default Userinfo