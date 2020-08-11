import React from 'react'

const ControlBlock: React.FC = props => {

  return (
    <div className='control-block'>
      <g
        data-id="control_repeat"
        className="blocklyDraggable"
        data-shapes="c-block c-1"
        data-category="control"
        transform="translate(12,4544)"
      >
        <path
          className="blocklyPath blocklyBlockBackground"
          stroke="#CF8B17"
          fill="#FFAB19"
          fill-opacity="1"
          d="m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 156 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 64 c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 h -8  a 4,4 0 0,0 -4,4 v 16 a 4,4 0 0,0 4,4 h  8 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 156 H 156 a 4,4 0 0,1 4,4 v 24  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z"
        />
        <g
          data-id="math_whole_number"
          data-argument-type="text number"
          data-shapes="argument round"
          transform="translate(61.3671875,8)"
        >
          <path
            className="blocklyPath blocklyBlockBackground"
            stroke="#CF8B17"
            fill="#FFFFFF"
            fill-opacity="1"
            d="m 0,0 m 16,0 H 24 a 16 16 0 0 1 0 32 H 16 a 16 16 0 0 1 0 -32 z"
          />
          <g
            className="blocklyEditableText"
            transform="translate(8, 0)"
            style={{ cursor: "text" }}
          >
            <text
              className="blocklyText"
              x="12"
              y="18"
              dominantBaseline="middle"
              dy="0"
              textAnchor="middle"
            >
              10
            </text>
          </g>
        </g>
        <text
          className="blocklyText"
          y="2"
          textAnchor="middle"
          dominantBaseline="middle"
          dy="0"
          x="22.68359375"
          transform="translate(8, 24)"
        >
          repeat
        </text>
        <path
          className="blocklyPath"
          style={{ visibility: 'hidden' }}
          d=""
          fill="#CF8B17"
        />
        <g
          transform="translate(128, 76)"
        >
          <image
            height="24px"
            width="24px"
            xlinkHref="/static/blocks-media/repeat.svg"
          />
        </g>
      </g>
    </div >
  )
}

export default ControlBlock
