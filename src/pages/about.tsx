import React from "react";
import MainLayout from "../components/templates/MainLayout/MainLayout";
import styles from "../styles/About.module.scss";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.profileContainer}>
        <Image
          className={styles.profileImage}
          src="/Profile_Image.png"
          alt="Profile Image"
          width={200}
          height={200}
        />
        <h1 className={styles.title}>Taeseop Kim</h1>
        <p>
          <strong>Phone:</strong> 010-5636-3060
          <br />
          <strong>Email:</strong> rlaxo0306@gmail.com
          <br />
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/serbi2012"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/serbi2012
          </a>
        </p>
      </div>

      <section className={styles.introduction}>
        <h2 className={styles.subtitle}>😀 Introduction</h2>
        <p>
          머릿속에 맴도는 상상을 현실로 만들어내는 것을 좋아합니다. 창의적이고
          참신한 아이디어를 기획뿐만 아니라 구현까지 이루어내는 전체적인
          프로세스에 관심이 많습니다. 단순히 공상에 멈추지 않고 실현하기 위해
          실천해가는 능동적인 마인드를 키워나가려 합니다.
        </p>
        <p>
          이러한 관심의 연장으로 상상을 시청각 미디어 콘텐츠로 만들어내는 영상,
          디자인 제작을 해왔습니다. 콘텐츠를 개발할 때 가장 중요시했던 것은
          사용자 친화적인 UX, UI 구성이었습니다. 소비자에게 쉽게 다가갈 수 있는,
          보다 접근성이 좋은 콘텐츠를 통해 제작자와 소비자가 상호작용할 수 있는
          구조에 고민이 많았습니다. 이러한 고민은 개발업무에도 이어져 보다 나은
          사용자 경험을 위해 Product의 디테일을 추구합니다.
        </p>
        <p>
          여러 공모전 입상 및 디지털 교육 콘텐츠 운영을 통해 협업 능력을
          키워왔습니다. 서로의 장점은 극대화하고, 서로의 단점은 보완해나가는
          건강한 소통 구조를 통해 유의미한 결과를 만들어내는 경험을 하며 조직원
          간의 ‘협업의 의미’를 되새겨갔습니다. 조직원들과의 원활한 소통을 통해
          조직이 필요로 하는 인재로 발돋움해나가는 개발자를 지향합니다.
        </p>
      </section>

      <section className={styles.career}>
        <h2 className={styles.subtitle}>🏢 Career</h2>
        <div className={styles.job}>
          <h3 className={styles.subsubtitle}>영남대학교 교육개발센터</h3>
          <p>
            교수학습지원과 연구개발, 그리고 효과적인 교육인프라 구축을 위한
            콘텐츠 개발 및 디지털 교육 플랫폼 운영 지원
          </p>
          <p>
            <strong>교육 콘텐츠 기획 및 제작 담당</strong>
          </p>
          <p>2021.02 ~ 2022.02</p>
        </div>
      </section>
      <section className={styles.education}>
        <h2 className={styles.subtitle}>📚 Education</h2>
        <div className={styles.school}>
          <h3 className={styles.subsubtitle}>VanillaCoding</h3>
          <p>
            <strong>VanillaCoding Bootcamp</strong>
          </p>
          <p>2022.08 ~ 2022.12</p>
        </div>
        <div className={styles.school}>
          <h3>VanillaCoding Prep</h3>
          <p>2022.03 ~ 2022.08</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
