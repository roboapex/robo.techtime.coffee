export interface CompetitionEvent {
  region: { [k: string]: CompetitionRegion }
}

export interface CompetitionRegion {
  name: string;
  website?: string;
}

export type CompetitionRegionCode = string
export type CompetitionEventCode = "nrc" | "robocup" | "fll" | "ide" | "apyrc" | "vex" | "bullseye" | "roborave" | "makex" | "wro" | "ftc" | "blanks"
export const CompetitionCodes: { [k in CompetitionEventCode]: CompetitionEvent } = {
  nrc: {
    region: {
      sg: {
        name: "National Robotics Competition (Singapore)",
        website: "https://ducklearning.com/pages/nrc-sg"
      }
    }
  },
  robocup: {
    region: {
      sg: {
        name: "Robocup Singapore Open",
        website: "https://robocupsg.org/en/singaporeopen",
      },
      aptji: {
        name: "RoboCup Asia-Pacific Tianjin Invitational Tournament"
      },
      icool: {
        name: "International CoSpace OnLine (iCooL) Challenge @Virtual RoboCup",
        website: "https://robocupap.org/icool2020/"
      }
    }
  },
  fll: {
    region: {
      sg: {
        name: "First LEGO League",
        website: "https://www.firstlegoleague.org/",
      }
    }
  },
  ide: {
    region: {
      sg: {
        name: "IDE (Innovation, Design and Engineering) Series",
        website: "https://ideseries.org/",
      }
    }
  },
  apyrc: {
    region: {
      sg: {
        name: "Asia Pacific Youth Robotics Competition",
        website: "https://apyrc.com/"
      },
    }
  },
  vex: {
    region: {
      sg: {
        name: "Singapore VEX Robotics Competition"
      },
      ap: {
        name: "Asia-Pacific VEX Robotics Championship"
      },
      world: {
        name: "VEX Robotics World Championship"
      }
    }
  },
  bullseye: {
    region: {
      sg: {
        name: "Bull’s Eye Competition",
        website: "https://victoria.moe.edu.sg/bulls-eye-competition/"
      }
    }
  },
  roborave: {
    region: {
      kaga: {
        name: "RoboRave Kaga Japan",
        website: "https://www.roborave-kaga.com/"
      },
      int: {
        name: "RoboRave International",
        website: "http://roborave.itccc.org.cn/"
      }
    }
  },
  makex: {
    region: {
      sg: {
        name: "MakeX Robotics Competition Singapore",
        website: "https://www.makexsg.com/"
      },
      world: {
        name: "",
        website: "https://www.makex.cc/en"
      }
    }
  },
  wro: {
    region: {
      sg: {
        name: "World Robot Olympiad",
        website: "https://wro-association.org/"
      }
    }
  },
  ftc: {
    region: {
      sg: {
        name: "FIRST Tech Challenge Singapore",
        website: "https://www.firstinspires.org/ftc"
      }
    }
  },
  blanks: {
    region: {
      sg: {
        name: "Blank's Beginnings"
      }
    }
  }
};