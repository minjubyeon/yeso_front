import React, { useState } from 'react';   // useState 임포트 추가
import './1_Onboarding.css';

export const Onboarding = () => {
  const [page, setPage] = useState(0);     //페이지 상태

  const handleNext = () => {  //다음으로 가는 함수
    if (page < 2) setPage(page + 1);
    else console.log('온보딩 종료');
  };

    const handlePrev = () => { //이전으로 가는 함수
    setPage(p => (p > 0 ? p - 1 : 0));
  };


  return (
    <div className="Onboarding">
      <div className="div">

          {/* 왼쪽 클릭하면 이전 페이지로 넘어감 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '50%',  // 화면 절반
            height: '100%',
            cursor: 'pointer',
            zIndex: 10
          }}
          onClick={handlePrev}
        />


        <div className="text-wrapper">
          {page === 0 && '마음에 물 주는 시간'}
          {page === 1 && '나의 두 번째 페이지'}
          {page === 2 && '마지막 페이지'}
        </div>

        <p className="p">
          {page === 0 && <>하루 한 번,<br/>나만의 식물과 감정을 나누세요.</>}
          {page === 1 && <>두 번째 페이지 내용<br/>여기에 표시</>}
          {page === 2 && <>세 번째 페이지 내용<br/>여기에 표시</>}
        </p>

        {/* 바 */}
        <div className="step-bar">
          <div className={`step-fill ${page === 0 ? 'pos0' : page === 1 ? 'pos1' : 'pos2'}`} />
          <div className="step-dot1" />
          <div className="step-dot2" />
        </div>

        {/* 노란 동그라미들 */}
        <div className="circle-group">
          <div className="circle-3">
            <div className="circle-2">
              <div className="circle-1" />
              <div className="circle-0" />
            </div>
          </div>
          
          <div className="or">
            {page === 0 && <>소개문구<br/>or<br/>캐릭터</>}
            {page === 1 && <>페이지1<br/>이미지</>}
            {page === 2 && <>페이지2<br/>이미지</>}
          </div>
        </div>

        {/* 버튼 */}
        <div className="btn-next-wrapper" onClick={handleNext}>
          <div className="btn-next-textbox">
            <div className="btn-next-text">{page < 2 ? '다음' : '시작하기'}</div>
          </div>
        </div>

        <div className="text">logo</div>
      </div>
    </div>
  );
};
