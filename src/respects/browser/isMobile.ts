function isMobile(): boolean {
    // 1. userAgent 기반 체크
    const userAgent: string = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobileUserAgent: boolean = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // 2. 화면 크기 기반 체크
    const isSmallScreen: boolean = window.matchMedia('(max-width: 800px)').matches;
  
    // 3. 터치 지원 여부 체크
    const isTouchDevice: boolean = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
    // 최종 판단: 여러 기준을 조합
    return isMobileUserAgent || (isSmallScreen && isTouchDevice);
  }
export default isMobile;