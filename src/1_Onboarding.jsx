import React from 'react';
import './1_Onboarding.css';

export const Onboarding = () => {
  return (
    <div className="Onboarding">
      <div className="div">
        <div className="text-wrapper">마음에 물 주는 시간</div>
        <p className="p">
          하루 한 번,
          <br />
          나만의 식물과 감정을 나누세요.
        </p>
        //바
        <div className="step-bar">
          <div className="step-fill" />
          <div className="step-dot1" />
          <div className="step-dot2" />
        </div>
        <div className="circle-group">
          <div className="circle-3">
            <div className="circle-2">
              <div className="circle-1" />
              <div className="circle-0" />
            </div>
          </div>

          <div className="or">
            소개문구
            <br />
            or <br />
            캐릭터
          </div>
        </div>
        <div className="group-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-2">다음</div>
          </div>
        </div>
        <div className="text-wrapper-3">logo</div>
      </div>
    </div>
  );
};
