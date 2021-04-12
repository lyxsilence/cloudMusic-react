import { memo } from "react";
import styled from "styled-components";
import { V_WIDTH, V_MIN_WIDTH, V_CONTAINER_WIDTH} from "../../utils/config"
import './index.css';

const MWrapper = styled.div`
  width: 100%;
`;
const MCHeader = styled.div`
  margin: 0 auto;
  max-width: ${V_WIDTH};
  min-width: ${V_MIN_WIDTH};
`;
const MCContainer = styled.div`
  margin: 0 auto;
  width: ${V_CONTAINER_WIDTH};
`;

const Content = memo(
  ({ children, bgDiv = null, bgc = "transparent", isContainer = true, borderTop = false, stylePass = {} }) => {
    // console.log(stylePass, "stylePass");

    if (!bgDiv) {
      const styles = {
        borderTop: borderTop || 'none',
        ...stylePass,
        backgroundColor: bgc 
      }
      return (
        <MWrapper style={styles}>
          {isContainer ? (
            <div>
              <MCContainer style={{backgroundColor: bgc}}>{children}</MCContainer>
            </div>
          ) : (
            <MCHeader style={{backgroundColor: bgc}}>{children}</MCHeader>
          )}
        </MWrapper>
      );
    } else {
      const styles = {
        borderTop: borderTop || 'none',
      }
      return <div style={styles}>{children}</div>;
    }
  }
);

export default Content;
