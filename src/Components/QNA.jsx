import React from 'react';

const QNA = ({da}) => {
    const {question,answer}=da
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">{question}</div>
  <div className="collapse-content text-sm">
    {answer}
  </div>
</div>
        </div>
    );
};

export default QNA;