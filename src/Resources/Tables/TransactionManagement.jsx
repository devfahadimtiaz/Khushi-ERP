"use client";
import React from "react";
import { jsx } from "@emotion/react";

/** @jsxImportSource @emotion/react */

function TransactionManagement() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      />
      <div
        css={{
          maxWidth: "1223px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0px 4px 24px rgba(0,0,0,0.03)",
          fontFamily: "'Inter',sans-serif",
          "@media (max-width: 991px)": {
            maxWidth: "991px",
          },
          "@media (max-width: 640px)": {
            maxWidth: "640px",
          },
          backgroundColor: "#FFF",
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 0",
            "@media (max-width: 991px)": {
              flexDirection: "column",
              alignItems: "flex-start",
            },
            "@media (max-width: 640px)": {
              flexDirection: "column",
              alignItems: "flex-start",
            },
          }}
        >
          <div
            css={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#092C4C",
            }}
          >
            Transaction Management
          </div>
          <div
            css={{
              fontSize: "14px",
              color: "#7E92A2",
            }}
          >
            View and manage all transactions
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #EAEEF4",
              borderRadius: "12px",
              padding: "10px 20px",
              "@media (max-width: 991px)": {
                marginTop: "10px",
              },
              "@media (max-width: 640px)": {
                marginTop: "10px",
              },
              backgroundColor: "#F6FAFD",
            }}
          >
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="33:32" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon" style="margin-right: 10px"> <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="#7E92A2" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
            <span
              css={{
                color: "#999",
                fontSize: "16px",
              }}
            >
              Search by name
            </span>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #EAEEF4",
              borderRadius: "12px",
              padding: "10px 20px",
              marginRight: "20px",
              "@media (max-width: 991px)": {
                marginTop: "10px",
              },
              "@media (max-width: 640px)": {
                marginTop: "10px",
              },
            }}
          >
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="33:35" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter-icon" style="margin-right: 10px"> <path d="M2.6667 2.6665H13.3334V4.4465L8.8867 8.89317V14.2265L6.22003 12.6665V8.89317L1.78003 4.4465V2.6665H2.6667Z" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            </div>
            <span>Filters</span>
          </div>
          <div
            css={{
              "@media (max-width: 991px)": {
                marginTop: "10px",
              },
              "@media (max-width: 640px)": {
                marginTop: "10px",
              },
              color: "#FFF",
              borderRadius: "12px",
              padding: "10px 20px",
              boxShadow: "0px 4px 12px rgba(58,54,219,0.15)",
              backgroundColor: "#3A36DB",
            }}
          >
            Export Selected
          </div>
        </div>
        <div
          css={{
            marginTop: "20px",
            border: "1px solid #EAEEF4",
            borderRadius: "12px",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              backgroundColor: "#F6FAFD",
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontWeight: "600",
                color: "#092C4C",
                fontSize: "14px",
                flex: "1",
              }}
            >
              Name
            </div>
            <div
              css={{
                fontWeight: "600",
                color: "#092C4C",
                fontSize: "14px",
                flex: "1",
              }}
            >
              Category
            </div>
            <div
              css={{
                fontWeight: "600",
                color: "#092C4C",
                fontSize: "14px",
                flex: "1",
              }}
            >
              Status
            </div>
            <div
              css={{
                fontWeight: "600",
                color: "#092C4C",
                fontSize: "14px",
                flex: "1",
              }}
            >
              Date
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 1
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Payment
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#FFB800",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Pending
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              4/8/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 2
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Payment
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#00A389",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Completed
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              12/28/2024
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 3
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Refund
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#FF4D4D",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Failed
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              2/10/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 4
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Refund
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#FF4D4D",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Failed
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              2/4/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 5
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Deposit
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#FFB800",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Pending
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              1/6/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 6
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Refund
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#00A389",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Completed
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              4/20/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 7
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Deposit
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#00A389",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Completed
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              4/16/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 8
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Deposit
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#FF4D4D",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Failed
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              2/19/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 9
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Payment
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#FFB800",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Pending
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              1/23/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              borderBottom: "1px solid #EAEEF4",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "@media (max-width: 640px)": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
            }}
          >
            <div
              css={{
                width: "13px",
                height: "13px",
                border: "1px solid #666",
                borderRadius: "2px",
                marginRight: "20px",
                backgroundColor: "#FFF",
              }}
            />
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Transaction 10
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              Deposit
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#00A389",
                flex: "1",
                borderRadius: "20px",
                padding: "2px 10px",
              }}
            >
              Completed
            </div>
            <div
              css={{
                fontSize: "14px",
                color: "#092C4C",
                flex: "1",
              }}
            >
              1/16/2025
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px",
            }}
          >
            <div
              css={{
                color: "#7E92A2",
                fontSize: "14px",
              }}
            >
              Showing 1 to 10 of 50 entries
            </div>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                "@media (max-width: 991px)": {
                  flexWrap: "wrap",
                },
                "@media (max-width: 640px)": {
                  flexWrap: "wrap",
                },
              }}
            >
              <div
                css={{
                  border: "1px solid #EAEEF4",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  marginRight: "5px",
                  color: "#000",
                  "@media (max-width: 991px)": {
                    marginBottom: "5px",
                  },
                  "@media (max-width: 640px)": {
                    marginBottom: "5px",
                  },
                }}
              >
                Previous
              </div>
              <div
                css={{
                  border: "1px solid #EAEEF4",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  marginRight: "5px",
                  color: "#092C4C",
                  "@media (max-width: 991px)": {
                    marginBottom: "5px",
                  },
                  "@media (max-width: 640px)": {
                    marginBottom: "5px",
                  },
                  backgroundColor: "#3A36DB",
                }}
              >
                1
              </div>
              <div
                css={{
                  border: "1px solid #EAEEF4",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  marginRight: "5px",
                  color: "#092C4C",
                  "@media (max-width: 991px)": {
                    marginBottom: "5px",
                  },
                  "@media (max-width: 640px)": {
                    marginBottom: "5px",
                  },
                }}
              >
                2
              </div>
              <div
                css={{
                  border: "1px solid #EAEEF4",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  marginRight: "5px",
                  color: "#092C4C",
                  "@media (max-width: 991px)": {
                    marginBottom: "5px",
                  },
                  "@media (max-width: 640px)": {
                    marginBottom: "5px",
                  },
                }}
              >
                3
              </div>
              <div
                css={{
                  border: "1px solid #EAEEF4",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  marginRight: "5px",
                  color: "#092C4C",
                  "@media (max-width: 991px)": {
                    marginBottom: "5px",
                  },
                  "@media (max-width: 640px)": {
                    marginBottom: "5px",
                  },
                }}
              >
                4
              </div>
              <div
                css={{
                  border: "1px solid #EAEEF4",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  marginRight: "5px",
                  color: "#092C4C",
                  "@media (max-width: 991px)": {
                    marginBottom: "5px",
                  },
                  "@media (max-width: 640px)": {
                    marginBottom: "5px",
                  },
                }}
              >
                5
              </div>
              <div
                css={{
                  border: "1px solid #EAEEF4",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  marginRight: "5px",
                  color: "#000",
                  "@media (max-width: 991px)": {
                    marginBottom: "5px",
                  },
                  "@media (max-width: 640px)": {
                    marginBottom: "5px",
                  },
                }}
              >
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionManagement;
