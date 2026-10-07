const SYSTEM='https://script.google.com/a/macros/medtecs.com/s/AKfycbyT4dPI3tx-WTutrRhhiI6sgZVUtmPUkGDc1Z6IfpAW2bJAjMjMupdnlncwsZ_wV0Cb/exec';
const copy={
  "zh-Hant": {
    "brand": "說到做到，主動回報",
    "eyebrow": "電腦版操作教學",
    "title": "說到做到，主動回報",
    "lead": "選擇下方主題，依照畫面完成登入、維護承諾及每週回報。",
    "open": "開啟系統",
    "prereq": "請準備已由小波開通系統權限的公司 @medtecs.com Google 帳號。",
    "helpLabel": "登入與使用協助",
    "helpTitle": "需要協助？請依問題聯絡窗口",
    "helpText": "公司 Google 帳號、密碼或系統權限問題請聯絡小波；系統操作、畫面或功能問題請聯絡 Sandy；承諾及回報內容問題請聯絡內控部 Angela。",
    "contactName": "小波 Bob",
    "contentContactName": "內控部 Angela",
    "systemContactName": "Sandy",
    "systemContactDetail": "系統操作、畫面或功能問題",
    "footer": "電腦版操作教學 · 請以系統實際顯示為準",
    "back": "回到頂端",
    "zoom": "點圖片可放大查看",
    "close": "關閉圖片",
    "nav": [
      "登入",
      "維護承諾",
      "日常回報",
      "總覽與週別"
    ],
    "navDesc": [
      "登入系統",
      "填寫、確認及維護承諾",
      "每週回報與提交",
      "查看待辦摘要與選擇回報週別"
    ],
    "steps": [
      {
        "title": "以公司 Google 帳號登入",
        "body": "點選「開啟系統」。第一次使用、使用無痕視窗或尚未登入公司帳號時，通常會出現 Google 登入畫面；已登入時，可能直接進入系統。",
        "items": [
          [
            "輸入公司帳號",
            "輸入您的公司 Google 帳號；若出現帳號清單，請選擇公司帳號。",
            {
              "image": "google-login.png",
              "alt": "Google 公司帳號登入畫面",
              "customMarks": true,
              "marks": [
                [
                  51.6,
                  33,
                  33,
                  8,
                  "1"
                ],
                [
                  78.7,
                  63.4,
                  6.2,
                  6.1,
                  "2"
                ]
              ]
            }
          ],
          [
            "完成登入",
            "依畫面指示輸入密碼；若出現身分驗證，請完成驗證。"
          ],
          [
            "確認登入身分",
            "進入系統後，確認顯示的是您本人的姓名。",
            {
              "image": "login-identity-20261007.png",
              "alt": "確認登入身分",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  89,
                  38,
                  9,
                  26,
                  "1"
                ]
              ],
              "ratio": "10.5 / 1"
            }
          ]
        ],
        "note": "帳號、密碼或系統權限有問題，請聯絡小波：bob.ren@manhattansez.com。"
      },
      {
        "title": "填寫並確認自己的承諾",
        "body": "選取自己的承諾，依序確認並填寫事項標題、我要完成什麼、怎樣確認成果及何時完成；填寫時請一併參考 AI 與內控部的提醒。",
        "items": [
          [
            "確認四項內容",
            "確認事項標題、要完成的工作、成果或交付物，以及明確的完成日期或頻率。",
            {
              "image": "test-overview.png",
              "alt": "陳美德測試區的承諾內容與四個確認欄位"
            }
          ],
          [
            "確認承諾",
            "內容核對完成後，按「確認並看下一項」。確認後，後續要依週別填寫每週回報。",
            {
              "image": "test-transfer.png",
              "alt": "陳美德測試區的 AI 提醒與確認並看下一項",
              "marks": [
                [
                  34,
                  15,
                  10,
                  7,
                  "1"
                ]
              ]
            }
          ],
          [
            "提出疑義",
            "若對內容或責任歸屬有疑問，先按「提出疑義」，待問題釐清後再確認。",
            {
              "image": "test-transfer.png",
              "alt": "陳美德測試區的提出疑義位置",
              "marks": [
                [
                  42,
                  49,
                  9,
                  6,
                  "1"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "新增承諾",
        "body": "依照以下步驟建立新承諾，完成確認並依建議調整內容。",
        "items": [
          [
            "新增並儲存草稿",
            "點選「新增承諾」，填寫事項標題、我要完成什麼、怎樣確認成果及何時完成。尚未完整的內容，可先寫下初步想法，再點選「儲存草稿，開啟確認卡片」。",
            {
              "image": "add-draft-20261006.png",
              "alt": "新增並儲存草稿",
              "local": true,
              "annotated": true
            }
          ],
          [
            "參考 AI 提醒，補齊並確認承諾",
            "參考確認卡片上的 AI 提醒，補齊工作內容、可核對的成果及完成時間，並選擇是否涉及特區建設。核對完成後，按「確認並看下一項」。必填欄位未填妥時，無法確認承諾；儲存草稿不代表已確認。",
            {
              "image": "add-confirm-20261006.png",
              "alt": "參考 AI 提醒，補齊並確認承諾",
              "local": true,
              "annotated": true
            }
          ],
          [
            "查看內控部提醒，修改承諾內容",
            "承諾確認後，內控部會初步檢視，並針對對應欄位提出建議。請閱讀「內控部提醒」，再點選「修改承諾內容」，依建議補充或調整工作內容、成果及完成時間。",
            {
              "image": "add-review-20261007.png",
              "alt": "查看內控部提醒，修改承諾內容",
              "local": true,
              "annotated": true
            }
          ]
        ],
        "after": "確認承諾後，仍須依週別回報進度。"
      },
      {
        "title": "建議轉交承諾",
        "body": "若承諾應由其他主管負責，展開「建議轉交」，提出轉交建議。",
        "items": [
          [
            "選擇建議接手主管",
            "從清單選擇建議接手的主管；若無法判斷，可選擇「不確定，請總部指派」。"
          ],
          [
            "填寫轉交原因",
            "說明為何需要轉交；此欄為必填。"
          ],
          [
            "送出申請",
            "確認資料後按「送出申請」。"
          ]
        ],
        "image": "test-transfer.png",
        "alt": "陳美德測試區的建議轉交表單",
        "marks": [
          [
            29,
            51,
            65,
            39,
            "1"
          ]
        ]
      },
      {
        "title": "申請移除承諾",
        "body": "在要處理的承諾卡片下方點選「申請移除（需Christine核准）」，填寫必填的「移除原因」，再點選「送出申請」。",
        "note": "送出後須經 Christine 核准；核准前系統仍保留此事項。",
        "image": "test-remove.png",
        "alt": "陳美德測試區的申請移除表單",
        "marks": [
          [
            29,
            28,
            65,
            52,
            "1"
          ]
        ]
      },
      {
        "title": "填寫與暫存",
        "body": "選擇要回報的週別，從「本週待填」或「待填寫」開啟承諾，填寫本週回報。",
        "items": [
          [
            "填寫本週進度與下週預計",
            "「本週進度」及「下週預計」皆為必填。說明本週已完成、進行中或等待回覆的狀況，並填寫下週預計推進的工作。可參考左側「上週回報」，使用複製後仍須核對並更新本週內容。",
            {
              "image": "daily-fill-20261007.jpg",
              "alt": "本週進度、下週預計與暫存草稿",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  43.952095808383234,
                  10.816326530612246,
                  55.92814371257485,
                  28.367346938775512,
                  "1"
                ],
                [
                  43.952095808383234,
                  47.755102040816325,
                  55.92814371257485,
                  28.57142857142857,
                  "2"
                ],
                [
                  74.37125748502994,
                  88.9795918367347,
                  10.89820359281437,
                  10.204081632653061,
                  "3"
                ]
              ]
            }
          ],
          [
            "暫存每日進度",
            "可每天補充目前狀況，按「暫存草稿」保存。草稿可繼續修改；暫存不代表已提交，完成後仍須按「提交本週回報」。"
          ],
          [
            "補充協助需求與佐證資料",
            "如需協調，勾選「需要協助／待協調」，說明需要誰協助或決定什麼。展開「新增佐證／補充資料（選填）」可填寫補充說明與本週佐證 NAS 路徑。若專案 NAS 資料夾標示必填，須補齊後才能提交。",
            {
              "image": "daily-support-20261007.jpg",
              "alt": "佐證資料、本週 NAS 路徑與專案資料夾",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  43.952095808383234,
                  6.771653543307086,
                  55.92814371257485,
                  46.14173228346456,
                  "1"
                ],
                [
                  0.47904191616766467,
                  91.96850393700787,
                  98.92215568862277,
                  7.4015748031496065,
                  "2"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "提交與修改回報",
        "body": "完成填寫後提交回報，再確認系統顯示的狀態。",
        "items": [
          [
            "提交本週回報",
            "核對本週進度、下週預計及必要資料，按「提交本週回報」。",
            {
              "image": "daily-fill-20261007.jpg",
              "alt": "提交本週回報按鈕",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  85.74850299401197,
                  88.9795918367347,
                  14.131736526946106,
                  10.204081632653061,
                  "1"
                ]
              ]
            }
          ],
          [
            "確認提交結果",
            "確認該項目顯示「本週已回覆」。這代表所選週的回報已提交，不代表整項承諾已完成。",
            {
              "image": "daily-submitted-20261007.jpg",
              "alt": "已提交回報狀態與截止後鎖定提示",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  88.74251497005989,
                  16.444444444444446,
                  9.580838323353294,
                  6.666666666666667,
                  "1"
                ],
                [
                  0.5988023952095809,
                  0.8888888888888888,
                  97.72455089820359,
                  12.666666666666668,
                  "2"
                ]
              ]
            }
          ],
          [
            "修改已提交回報",
            "截止前若需修正，按「修改本週回報」，更新內容後再次提交。截止後已提交內容會鎖定，仍可在下方回覆管理者留言。",
            {
              "image": "test-weekly-version.png",
              "alt": "截止前的修改本週回報按鈕",
              "customMarks": true,
              "marks": [
                [
                  85.234375,
                  38.333333333333336,
                  9.375,
                  6.805555555555555,
                  "1"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "查看主管總覽",
        "body": "先查看頁面上方的待辦摘要，再選取要處理的承諾。",
        "items": [
          [
            "待確認承諾",
            "尚待本人核對並確認的承諾，請先完成內容確認。"
          ],
          [
            "本週待填",
            "目前所選週別尚待填寫及提交的週報事項。"
          ],
          [
            "本週已填",
            "目前所選週別已提交的週報數量，不代表整項承諾已完成。"
          ],
          [
            "台北總部留言待回覆",
            "查看尚待回覆的留言，開啟相關承諾後閱讀並處理。"
          ]
        ],
        "image": "test-overview.png",
        "alt": "主管總覽中的待辦摘要位置"
      },
      {
        "title": "選擇回報週別",
        "body": "填寫或查看週報前，先確認「回報週別」的日期範圍。",
        "items": [
          [
            "確認日期範圍",
            "從頁面上方「回報週別」選擇要查看或填寫的那一週。"
          ],
          [
            "查看截止時間",
            "核對畫面顯示的回報截止時間，並留意標示的台灣時間。"
          ],
          [
            "核對當週狀態",
            "切換週別後，重新查看本週待填、本週已填及承諾清單，再開啟要處理的事項。"
          ]
        ],
        "image": "test-overview.png",
        "alt": "回報週別選單與截止時間位置"
      },
      {
        "title": "查看與回覆留言",
        "body": "回報後，持續查看「留言與回覆」，處理台北總部提出的問題。",
        "items": [
          [
            "查看留言",
            "開啟相關承諾，至「留言與回覆」閱讀問題與需補充的事項；若顯示「尚無留言」，目前不需回覆。"
          ],
          [
            "填寫並送出回覆",
            "在對應留言下方填寫處理狀況或補充說明，核對後按「送出回覆」。"
          ],
          [
            "確認回覆結果",
            "確認回覆已顯示在該則留言下方。若另需調整本週回報，請依「提交與修改回報」操作。"
          ]
        ]
      }
    ],
    "development": "開發中",
    "developmentText": "此教學正在調整，完成後將開放。",
    "testBanner": "測試區｜內容調整中",
    "testTitle": "測試區"
  },
  "zh-Hans": {
    "brand": "说到做到，主动回报",
    "eyebrow": "电脑版操作教学",
    "title": "说到做到，主动回报",
    "lead": "选择下方主题，按照画面完成登录、维护承诺及每周回报。",
    "open": "打开系统",
    "prereq": "请准备已由小波开通系统权限的公司 @medtecs.com Google 账号。",
    "helpLabel": "登录与使用协助",
    "helpTitle": "需要协助？请按问题联系窗口",
    "helpText": "公司 Google 账号、密码或系统权限问题请联系小波；系统操作、画面或功能问题请联系 Sandy；承诺及回报内容问题请联系内控部 Angela。",
    "contactName": "小波 Bob",
    "contentContactName": "内控部 Angela",
    "systemContactName": "Sandy",
    "systemContactDetail": "系统操作、画面或功能问题",
    "footer": "电脑版操作教学 · 请以系统实际显示为准",
    "back": "返回顶部",
    "zoom": "点击图片可放大查看",
    "close": "关闭图片",
    "nav": [
      "登录",
      "维护承诺",
      "日常回报",
      "总览与周别"
    ],
    "navDesc": [
      "登录系统",
      "填写、确认及维护承诺",
      "每周回报与提交",
      "查看待办摘要与选择回报周别"
    ],
    "steps": [
      {
        "title": "使用公司 Google 账号登录",
        "body": "点击「打开系统」。第一次使用、使用无痕窗口或尚未登录公司账号时，通常会出现 Google 登录画面；已登录时，可能直接进入系统。",
        "items": [
          [
            "输入公司账号",
            "输入您的公司 Google 账号；若出现账号列表，请选择公司账号。",
            {
              "image": "google-login.png",
              "alt": "Google 公司账号登录画面",
              "customMarks": true,
              "marks": [
                [
                  51.6,
                  33,
                  33,
                  8,
                  "1"
                ],
                [
                  78.7,
                  63.4,
                  6.2,
                  6.1,
                  "2"
                ]
              ]
            }
          ],
          [
            "完成登录",
            "按照画面提示输入密码；若出现身份验证，请完成验证。"
          ],
          [
            "确认登录身份",
            "进入系统后，确认显示的是您本人的姓名。",
            {
              "image": "login-identity-20261007.png",
              "alt": "确认登入身份",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  89,
                  38,
                  9,
                  26,
                  "1"
                ]
              ],
              "ratio": "10.5 / 1"
            }
          ]
        ],
        "note": "账号、密码或系统权限有问题，请联系小波：bob.ren@manhattansez.com。"
      },
      {
        "title": "填写并确认自己的承诺",
        "body": "选择自己的承诺，依次确认并填写事项标题、我要完成什么、怎样确认成果及何时完成；填写时请一并参考 AI 与内控部的提醒。",
        "items": [
          [
            "确认四项内容",
            "确认事项标题、要完成的工作、成果或交付物，以及明确的完成日期或频率。",
            {
              "image": "test-overview.png",
              "alt": "陈美德测试区的承诺内容与四个确认字段"
            }
          ],
          [
            "确认承诺",
            "核对完成后，点击「確認並看下一項」。确认后，后续要按照周别填写每周回报。",
            {
              "image": "test-transfer.png",
              "alt": "陈美德测试区的 AI 提醒与确认并查看下一项",
              "marks": [
                [
                  34,
                  15,
                  10,
                  7,
                  "1"
                ]
              ]
            }
          ],
          [
            "提出疑义",
            "若对内容或责任归属有疑问，先点击「提出疑義」，待问题厘清后再确认。",
            {
              "image": "test-transfer.png",
              "alt": "陈美德测试区的提出疑义位置",
              "marks": [
                [
                  42,
                  49,
                  9,
                  6,
                  "1"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "新增承诺",
        "body": "按照以下步骤建立新承诺，完成确认并依建议调整内容。",
        "items": [
          [
            "新增并保存草稿",
            "点击「新增承諾」，填写事项标题、我要完成什么、怎样确认成果及何时完成。尚未完整的内容，可先写下初步想法，再点击「儲存草稿，開啟確認卡片」。",
            {
              "image": "add-draft-20261006.png",
              "alt": "新增并保存草稿",
              "local": true,
              "annotated": true
            }
          ],
          [
            "参考 AI 提醒，补齐并确认承诺",
            "参考确认卡片上的 AI 提醒，补齐工作内容、可核对的成果及完成时间，并选择是否涉及特区建设。核对完成后，点击「確認並看下一項」。必填字段未填妥时，无法确认承诺；保存草稿不代表已确认。",
            {
              "image": "add-confirm-20261006.png",
              "alt": "参考 AI 提醒，补齐并确认承诺",
              "local": true,
              "annotated": true
            }
          ],
          [
            "查看内控部提醒，修改承诺内容",
            "承诺确认后，内控部会初步检查，并针对对应字段提出建议。请阅读「內控部提醒」，再点击「修改承諾內容」，按建议补充或调整工作内容、成果及完成时间。",
            {
              "image": "add-review-20261007.png",
              "alt": "查看内控部提醒，修改承诺内容",
              "local": true,
              "annotated": true
            }
          ]
        ],
        "after": "确认承诺后，仍须按周别回报进度。"
      },
      {
        "title": "建议转交承诺",
        "body": "若承诺应由其他主管负责，展开「建議轉交」，提出转交建议。",
        "items": [
          [
            "选择建议接手主管",
            "从列表选择建议接手的主管；若无法判断，可选择「不確定，請總部指派」。"
          ],
          [
            "填写转交原因",
            "说明为何需要转交；此字段为必填。"
          ],
          [
            "提交申请",
            "确认资料后点击「送出申請」。"
          ]
        ],
        "image": "test-transfer.png",
        "alt": "陈美德测试区的建议转交表单"
      },
      {
        "title": "申请移除承诺",
        "body": "在要处理的承诺卡片下方点击「申請移除（需Christine核准）」，填写必填的「移除原因」，再点击「送出申請」。",
        "note": "提交后须经 Christine 核准；核准前系统仍保留此事项。",
        "image": "test-remove.png",
        "alt": "陈美德测试区的申请移除表单"
      },
      {
        "title": "填写与暂存",
        "body": "选择要汇报的周别，从「本週待填」或「待填寫」打开承诺，填写本周汇报。",
        "items": [
          [
            "填写本周进度与下周计划",
            "「本週進度」及「下週預計」均为必填。说明本周已完成、进行中或等待回复的情况，并填写下周计划推进的工作。可参考左侧「上週回報」，复制后仍须核对并更新本周内容。",
            {
              "image": "daily-fill-20261007.jpg",
              "alt": "本週進度、下週預計與暫存草稿",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  43.952095808383234,
                  10.816326530612246,
                  55.92814371257485,
                  28.367346938775512,
                  "1"
                ],
                [
                  43.952095808383234,
                  47.755102040816325,
                  55.92814371257485,
                  28.57142857142857,
                  "2"
                ],
                [
                  74.37125748502994,
                  88.9795918367347,
                  10.89820359281437,
                  10.204081632653061,
                  "3"
                ]
              ]
            }
          ],
          [
            "暂存每日进度",
            "可每天补充目前情况，点击「暫存草稿」保存。草稿可以继续修改；暂存不代表已提交，完成后仍须点击「提交本週回報」。"
          ],
          [
            "补充协助需求与佐证资料",
            "如需协调，勾选「需要協助／待協調」，说明需要谁协助或决定什么。展开「新增佐證／補充資料（選填）」可填写补充说明与本周佐证 NAS 路径。如果项目 NAS 文件夹标示必填，须补齐后才能提交。",
            {
              "image": "daily-support-20261007.jpg",
              "alt": "佐證資料、本週 NAS 路徑與專案資料夾",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  43.952095808383234,
                  6.771653543307086,
                  55.92814371257485,
                  46.14173228346456,
                  "1"
                ],
                [
                  0.47904191616766467,
                  91.96850393700787,
                  98.92215568862277,
                  7.4015748031496065,
                  "2"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "提交与修改汇报",
        "body": "完成填写后提交汇报，再确认系统显示的状态。",
        "items": [
          [
            "提交本周汇报",
            "核对本周进度、下周计划及必要资料，点击「提交本週回報」。",
            {
              "image": "daily-fill-20261007.jpg",
              "alt": "提交本週回報按鈕",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  85.74850299401197,
                  88.9795918367347,
                  14.131736526946106,
                  10.204081632653061,
                  "1"
                ]
              ]
            }
          ],
          [
            "确认提交结果",
            "确认该项目显示「本週已回覆」。这代表所选周的汇报已提交，不代表整项承诺已完成。",
            {
              "image": "daily-submitted-20261007.jpg",
              "alt": "已提交回報狀態與截止後鎖定提示",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  88.74251497005989,
                  16.444444444444446,
                  9.580838323353294,
                  6.666666666666667,
                  "1"
                ],
                [
                  0.5988023952095809,
                  0.8888888888888888,
                  97.72455089820359,
                  12.666666666666668,
                  "2"
                ]
              ]
            }
          ],
          [
            "修改已提交汇报",
            "截止前如需修正，点击「修改本週回報」，更新内容后再次提交。截止后已提交内容会锁定，仍可在下方回复管理者留言。",
            {
              "image": "test-weekly-version.png",
              "alt": "截止前的修改本週回報按鈕",
              "customMarks": true,
              "marks": [
                [
                  85.234375,
                  38.333333333333336,
                  9.375,
                  6.805555555555555,
                  "1"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "查看主管总览",
        "body": "先查看页面上方的待办摘要，再选择要处理的承诺。",
        "items": [
          [
            "待确认承诺",
            "尚待本人核对并确认的承诺，请先完成内容确认。"
          ],
          [
            "本周待填",
            "当前所选周别尚待填写及提交的周报事项。"
          ],
          [
            "本周已填",
            "当前所选周别已提交的周报数量，不代表整项承诺已完成。"
          ],
          [
            "台北总部留言待回复",
            "查看尚待回复的留言，打开相关承诺后阅读并处理。"
          ]
        ],
        "image": "test-overview.png",
        "alt": "主管总览中的待办摘要位置"
      },
      {
        "title": "选择回报周别",
        "body": "填写或查看周报前，先确认「回報週別」的日期范围。",
        "items": [
          [
            "确认日期范围",
            "从页面上方「回報週別」选择要查看或填写的那一周。"
          ],
          [
            "查看截止时间",
            "核对画面显示的回报截止时间，并留意标示的台湾时间。"
          ],
          [
            "核对当周状态",
            "切换周别后，重新查看本周待填、本周已填及承诺列表，再打开要处理的事项。"
          ]
        ],
        "image": "test-overview.png",
        "alt": "回报周别菜单与截止时间位置"
      },
      {
        "title": "查看与回复留言",
        "body": "汇报后，持续查看「留言與回覆」，处理台北总部提出的问题。",
        "items": [
          [
            "查看留言",
            "打开相关承诺，到「留言與回覆」阅读问题与需补充的事项；若显示「尚無留言」，目前无需回复。"
          ],
          [
            "填写并发送回复",
            "在对应留言下方填写处理情况或补充说明，核对后点击「送出回覆」。"
          ],
          [
            "确认回复结果",
            "确认回复已显示在该则留言下方。如另需调整本周汇报，请按照「提交与修改汇报」操作。"
          ]
        ]
      }
    ],
    "development": "开发中",
    "developmentText": "此教学正在调整，完成后将开放。",
    "testBanner": "测试区｜内容调整中",
    "testTitle": "测试区"
  },
  "en": {
    "brand": "Deliver on commitments. Report proactively.",
    "eyebrow": "DESKTOP USER GUIDE",
    "title": "Deliver on commitments. Report proactively.",
    "lead": "Choose a topic below to sign in, maintain commitments, and submit weekly reports.",
    "open": "Open the system",
    "prereq": "Use your company @medtecs.com Google account. Bob must first enable your system access.",
    "helpLabel": "SIGN-IN & ACCESS SUPPORT",
    "helpTitle": "Need help? Contact the right person",
    "helpText": "Contact Bob for company Google account, password or system access issues. Contact Sandy for system operation, screen or feature issues. Contact Angela in Internal Control for commitment or report content questions.",
    "contactName": "Bob",
    "contentContactName": "Angela · Internal Control",
    "systemContactName": "Sandy",
    "systemContactDetail": "System operation, screen or feature issues",
    "footer": "Desktop user guide · Follow the current system screen",
    "back": "Back to top",
    "zoom": "Click the image to enlarge",
    "close": "Close image",
    "nav": [
      "Sign in",
      "Maintain commitments",
      "Daily reporting",
      "Overview & reporting week"
    ],
    "navDesc": [
      "Sign in to the system",
      "Complete, confirm and maintain commitments",
      "Weekly reporting and submission",
      "Read the dashboard and choose a reporting week"
    ],
    "steps": [
      {
        "title": "Sign in with your company Google account",
        "body": "Select “Open the system”. Google sign-in normally appears on your first visit, in a private browsing window, or when you are not signed in. If already signed in, you may enter the system directly.",
        "items": [
          [
            "Enter your company account",
            "Enter your company Google account. If an account list appears, choose your company account.",
            {
              "image": "google-login.png",
              "alt": "Google sign-in for a company account",
              "customMarks": true,
              "marks": [
                [
                  51.6,
                  33,
                  33,
                  8,
                  "1"
                ],
                [
                  78.7,
                  63.4,
                  6.2,
                  6.1,
                  "2"
                ]
              ]
            }
          ],
          [
            "Complete sign-in",
            "Enter your password as instructed. Complete any identity verification requested by Google."
          ],
          [
            "Check your identity",
            "After entering the system, check that the displayed name is yours.",
            {
              "image": "login-identity-20261007.png",
              "alt": "Check your name after sign-in",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  89,
                  38,
                  9,
                  26,
                  "1"
                ]
              ],
              "ratio": "10.5 / 1"
            }
          ]
        ],
        "note": "For account, password or system access issues, contact Bob: bob.ren@manhattansez.com."
      },
      {
        "title": "Complete and confirm your commitments",
        "body": "Select one of your commitments and check the item title, planned work, success criteria and completion timing. Read the AI and Internal Control reminders while filling it in.",
        "items": [
          [
            "Check all four fields",
            "Confirm the item title, planned work, result or deliverable, and a clear completion date or frequency.",
            {
              "image": "test-overview.png",
              "alt": "Commitment details and four confirmation fields in the Chen Meide test area"
            }
          ],
          [
            "Confirm the commitment",
            "After checking the content, select “Confirm and view next” (確認並看下一項). Once confirmed, report progress for it every week.",
            {
              "image": "test-transfer.png",
              "alt": "AI reminder and Confirm and view next in the Chen Meide test area",
              "marks": [
                [
                  34,
                  15,
                  10,
                  7,
                  "1"
                ]
              ]
            }
          ],
          [
            "Raise a question",
            "If the content or ownership is unclear, select “Raise a question” (提出疑義) and confirm the commitment after the issue is resolved.",
            {
              "image": "test-transfer.png",
              "alt": "Raise a question control in the Chen Meide test area",
              "marks": [
                [
                  42,
                  49,
                  9,
                  6,
                  "1"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "Add a commitment",
        "body": "Follow these steps to create, confirm, and update a new commitment.",
        "items": [
          [
            "Add a commitment and save a draft",
            "Select “新增承諾” (Add commitment). Enter the title, what you will deliver, how results will be verified, and when the work will be completed. If details are not ready, start with your initial ideas and select “儲存草稿，開啟確認卡片” (Save draft and open confirmation card).",
            {
              "image": "add-draft-20261006.png",
              "alt": "Add a commitment and save a draft",
              "local": true,
              "annotated": true
            }
          ],
          [
            "Read AI reminders, complete the fields, and confirm",
            "Use the AI reminders to clarify the work, verifiable outcomes, and completion date. Select whether the commitment involves special-zone construction. After reviewing the content, select “確認並看下一項” (Confirm and view next). All required fields must be completed before confirmation. Saving a draft does not confirm the commitment.",
            {
              "image": "add-confirm-20261006.png",
              "alt": "Read AI reminders, complete the fields, and confirm",
              "local": true,
              "annotated": true
            }
          ],
          [
            "Read Internal Control reminders and edit the commitment",
            "After confirmation, Internal Control will review the commitment and provide suggestions for the relevant fields. Read “內控部提醒” (Internal Control reminders), then select “修改承諾內容” (Edit commitment content) to clarify or update the work, outcomes, and completion date.",
            {
              "image": "add-review-20261007.png",
              "alt": "Read Internal Control reminders and edit the commitment",
              "local": true,
              "annotated": true
            }
          ]
        ],
        "after": "After confirming a commitment, report progress each week."
      },
      {
        "title": "Suggest transferring a commitment",
        "body": "If another manager should be responsible for the commitment, expand “Suggest transfer” (建議轉交) and submit a transfer suggestion.",
        "items": [
          [
            "Choose a suggested owner",
            "Select the manager who should take over. If you are unsure, select “Not sure; let headquarters assign” (不確定，請總部指派)."
          ],
          [
            "Enter the reason",
            "Explain why the commitment should be transferred. This field is required."
          ],
          [
            "Submit the request",
            "Check the information and select “Submit request” (送出申請)."
          ]
        ],
        "image": "test-transfer.png",
        "alt": "Suggest transfer form in the Chen Meide test area"
      },
      {
        "title": "Request removal of a commitment",
        "body": "Open the commitment card and select “申請移除（需Christine核准）”. Enter the required reason (移除原因), then select “送出申請”.",
        "note": "Christine must approve the request. The item remains in the system until it is approved.",
        "image": "test-remove.png",
        "alt": "Request removal form in the Chen Meide test area"
      },
      {
        "title": "Fill in and save a draft",
        "body": "Choose the reporting week, then open a commitment under “本週待填” or “待填寫”.",
        "items": [
          [
            "Enter progress and next week’s plan",
            "Both “本週進度” (This week’s progress) and “下週預計” (Next week’s plan) are required. Describe completed work, work in progress, or pending responses, and explain what you plan to do next week. You can refer to “上週回報” on the left; review and update any copied text.",
            {
              "image": "daily-fill-20261007.jpg",
              "alt": "本週進度、下週預計與暫存草稿",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  43.952095808383234,
                  10.816326530612246,
                  55.92814371257485,
                  28.367346938775512,
                  "1"
                ],
                [
                  43.952095808383234,
                  47.755102040816325,
                  55.92814371257485,
                  28.57142857142857,
                  "2"
                ],
                [
                  74.37125748502994,
                  88.9795918367347,
                  10.89820359281437,
                  10.204081632653061,
                  "3"
                ]
              ]
            }
          ],
          [
            "Save daily updates",
            "You can record updates each day and select “暫存草稿” (Save draft). A draft can be edited further. Saving a draft does not submit your report; select “提交本週回報” when ready."
          ],
          [
            "Add support needs and evidence",
            "Select “需要協助／待協調” if assistance is needed, and explain who should help or what decision is required. Expand “新增佐證／補充資料（選填）” to add supporting information and this week’s NAS evidence path. If the project NAS folder is marked required, complete it before submitting.",
            {
              "image": "daily-support-20261007.jpg",
              "alt": "佐證資料、本週 NAS 路徑與專案資料夾",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  43.952095808383234,
                  6.771653543307086,
                  55.92814371257485,
                  46.14173228346456,
                  "1"
                ],
                [
                  0.47904191616766467,
                  91.96850393700787,
                  98.92215568862277,
                  7.4015748031496065,
                  "2"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "Submit and edit a report",
        "body": "Submit the completed report, then check its status.",
        "items": [
          [
            "Submit the report",
            "Review this week’s progress, next week’s plan, and any required information, then select “提交本週回報” (Submit weekly report).",
            {
              "image": "daily-fill-20261007.jpg",
              "alt": "提交本週回報按鈕",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  85.74850299401197,
                  88.9795918367347,
                  14.131736526946106,
                  10.204081632653061,
                  "1"
                ]
              ]
            }
          ],
          [
            "Check submission",
            "Confirm that the item shows “本週已回覆”. This means the report for the selected week has been submitted; it does not mean the entire commitment is complete.",
            {
              "image": "daily-submitted-20261007.jpg",
              "alt": "已提交回報狀態與截止後鎖定提示",
              "local": true,
              "customMarks": true,
              "marks": [
                [
                  88.74251497005989,
                  16.444444444444446,
                  9.580838323353294,
                  6.666666666666667,
                  "1"
                ],
                [
                  0.5988023952095809,
                  0.8888888888888888,
                  97.72455089820359,
                  12.666666666666668,
                  "2"
                ]
              ]
            }
          ],
          [
            "Edit a submitted report",
            "Before the deadline, select “修改本週回報”, update the content, and submit again. Submitted reports are locked after the deadline, but you can still reply to management comments below.",
            {
              "image": "test-weekly-version.png",
              "alt": "截止前的修改本週回報按鈕",
              "customMarks": true,
              "marks": [
                [
                  85.234375,
                  38.333333333333336,
                  9.375,
                  6.805555555555555,
                  "1"
                ]
              ]
            }
          ]
        ]
      },
      {
        "title": "Read the manager dashboard",
        "body": "Check the summary at the top of the page, then select the commitment to work on.",
        "items": [
          [
            "Commitments awaiting confirmation",
            "Review and confirm the commitments that are still awaiting your confirmation."
          ],
          [
            "Reports to fill this week",
            "Weekly reports still awaiting completion and submission for the selected week."
          ],
          [
            "Reports submitted this week",
            "The number of submitted reports for the selected week. This does not mean the commitments are complete."
          ],
          [
            "Headquarters comments awaiting reply",
            "Open the relevant commitment to read and address comments awaiting your reply."
          ]
        ],
        "image": "test-overview.png",
        "alt": "Task summary on the manager dashboard"
      },
      {
        "title": "Choose the reporting week",
        "body": "Check the date range under “回報週別” before reading or completing a report.",
        "items": [
          [
            "Check the date range",
            "Use the reporting-week menu at the top of the page to choose the week to view or complete."
          ],
          [
            "Check the deadline",
            "Check the displayed reporting deadline and note that it uses Taiwan time."
          ],
          [
            "Review the selected week",
            "After changing weeks, check the pending and submitted report counts and the commitment list before opening an item."
          ]
        ],
        "image": "test-overview.png",
        "alt": "Reporting-week menu and deadline"
      },
      {
        "title": "Read and reply to comments",
        "body": "After reporting, check “留言與回覆” for questions from Taipei headquarters.",
        "items": [
          [
            "Read the comment",
            "Open the relevant commitment and read the questions and requested information under “留言與回覆”. If it shows “尚無留言”, no reply is needed yet."
          ],
          [
            "Write and send a reply",
            "Enter the update or requested information below the relevant comment, review it, then select “送出回覆” (Send reply)."
          ],
          [
            "Check your reply",
            "Make sure the reply appears below that comment. If the weekly report also needs updating, follow “Submit and edit a report”."
          ]
        ]
      }
    ],
    "development": "In development",
    "developmentText": "This guide is being updated and will be available when ready.",
    "testBanner": "TEST AREA · CONTENT IN REVIEW",
    "testTitle": "Test area"
  }
};
const pageFiles=['index.html','maintain.html','daily.html','overview.html'];
const ids=['login','maintain-item','add','transfer','remove','weekly','submission','dashboard-summary','reporting-week','comments'];
const groups=[{id:'login-group',nav:0,start:0,end:1},{id:'maintain',nav:1,start:1,end:5},{id:'daily',nav:2,start:5,end:7,indices:[5,6,9]},{id:'overview',nav:3,start:7,end:9}];
const isPreview=document.body.dataset.environment==='preview';
const pageIndex=Number(document.body.dataset.page||0);
let activeGroup=pageIndex;
const legacyHash=String(location.hash||'').replace('#','');
const legacyPage=groups.findIndex(g=>g.id===legacyHash||(g.indices||Array.from({length:g.end-g.start},(_,j)=>g.start+j)).map(i=>ids[i]).includes(legacyHash));
if(pageIndex===0&&legacyPage>0)location.replace(pageFiles[legacyPage]);
let current='zh-Hant';
try{const saved=localStorage.getItem('commitment-guide-language');if(copy[saved])current=saved;}catch{}
const guideMarks={
  '7:step':[[3.7,29.4,16.4,8.7,'1'],[21,29.4,16.5,8.7,'2'],[38.3,29.4,16.5,8.7,'3'],[55.7,29.4,16.5,8.7,'4']],
  '8:step':[[3.7,14.8,18,5,'1'],[78,13.6,19.5,5.2,'2']],
  '0:step':[[51.6,33,33,8,'1'],[78.7,63.4,6.2,6.1,'2']],
  '1:item:0':[[24.7,61.2,71.5,38.2,'1']],
  '1:item:1':[[34.3,15.5,9.4,5.6,'2']],
  '1:item:2':[[43.1,51.2,7.3,4.8,'3']],
  '2:step':[[25.8,24.5,6.2,5.4,'1'],[3.3,47.8,55.4,52,'2']],
  '3:step':[[29.8,63.8,63,6.1,'1'],[29.8,72,63,11.8,'2'],[29.8,83.7,6.8,5.7,'3']],
  '4:step':[[28.7,51.2,13.8,4.8,'1'],[29.6,60.3,63.3,13.4,'2'],[30,75.7,6.4,5.5,'3']],
  '5:step':[[58.7,15.2,35.6,15.1,'1'],[58.7,40.4,35.6,15,'2'],[58.6,57.8,14.5,4.4,'3'],[78,84.8,16.3,7.1,'4']],
  '6:step:0':[[19.6,39.2,8.2,4.5,'1'],[85.2,91.8,9.2,7.4,'2']],
  '6:step:1':[[30.5,68.3,20,10.5,'3'],[30.5,87,16,10,'4']]
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const emailLinks=s=>esc(s).replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,email=>`<a href="mailto:${email}">${email}</a>`);
function picture(s,i,k=0,item=false){const key=`${i}:${item?'item':'step'}:${k}`;const marks=s.annotated?[]:s.customMarks?(s.marks||[]):guideMarks[key]||guideMarks[`${i}:step`]||s.marks||[];return `<span class="image-wrap"><img src="${s.local?s.image:(isPreview?'../':'')+'assets/'+s.image}?v=7" alt="${esc(s.alt)}" ${s.ratio?`style="aspect-ratio:${s.ratio};object-fit:cover;object-position:50% 48%"`:""} ${i?'loading="lazy"':''}>${marks.map(m=>`<span aria-hidden="true" class="mark" style="left:${m[0]}%;top:${m[1]}%;width:${m[2]}%;height:${m[3]}%"><em>${m[4]}</em></span>`).join('')}</span>`;}
function render(lang){current=lang;const c=copy[lang];document.documentElement.lang=lang;document.body.classList.toggle('en-ui',lang==='en');document.title=(isPreview?c.testTitle+' | ':'')+c.nav[pageIndex]+' | '+c.title;document.querySelector('meta[name=description]').content=c.lead;document.querySelectorAll('[data-i]').forEach(e=>e.textContent=c[e.dataset.i]);document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));document.querySelectorAll('.system-link').forEach(a=>a.href=SYSTEM);document.querySelector('.steps-nav').setAttribute('aria-label',lang==='en'?'Guide steps':lang==='zh-Hans'?'教学步骤':'教學步驟');document.querySelector('.steps-nav').innerHTML=c.nav.map((n,i)=>{const disabled=!isPreview&&i>=2;const content=`<b>${String(i+1).padStart(2,'0')}</b><strong>${esc(n)}</strong><span>${esc(disabled?c.development:c.navDesc[i])}</span>`;return disabled?`<div class="nav-disabled" aria-disabled="true">${content}</div>`:`<a href="${pageFiles[i]}" data-group="${i}" aria-current="${i===activeGroup?'page':'false'}">${content}</a>`}).join('');
document.querySelector('#sections').innerHTML=groups.filter((_,gi)=>gi===pageIndex).map((g)=>{const gi=pageIndex;return `<div class="guide-group ${gi===activeGroup?'active':''}" id="${g.id}" ${gi===activeGroup?'':'hidden'}><div class="group-heading"><span>${String(gi+1).padStart(2,'0')}</span><h2>${esc(c.nav[gi])}</h2></div>${gi===1||gi===2?`<nav class="section-shortcuts" aria-label="${lang==='en'?'Section shortcuts':lang==='zh-Hans'?'段落捷径':'段落捷徑'}">${(g.indices||Array.from({length:g.end-g.start},(_,j)=>g.start+j)).map((i,n)=>`<a href="#${ids[i]}"><span>${String(n+1).padStart(2,'0')}</span> ${esc(c.steps[i].title)}</a>`).join('')}</nav>`:''}${(g.indices||Array.from({length:g.end-g.start},(_,j)=>g.start+j)).map((i,j)=>{const s=c.steps[i];const shots=s.images||[s];return `<section class="step ${s.pending?'pending':''}" id="${ids[i]}"><span class="step-num">${String(j+1).padStart(2,'0')}${s.pending?'<span class="pending-label">PENDING</span>':''}</span><h3 class="step-title">${esc(s.title)}</h3><p>${esc(s.body)}</p>${s.items?`<ol class="items">${s.items.map(([t,b,shot],itemIndex)=>`<li><h3>${esc(t)}</h3><p>${esc(b)}</p>${shot?`<figure class="shot item-shot"><button class="shot-button" type="button" data-image="${i}" data-item="${itemIndex}" aria-label="${esc(c.zoom+': '+shot.alt)}">${picture(shot,i,itemIndex,true)}</button><figcaption>${esc(c.zoom)}</figcaption></figure>`:''}</li>`).join('')}</ol>`:''}${s.compare?`<div class="comparison">${s.compare.map(([t,b])=>`<div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('')}</div>`:''}${s.note?`<p class="note important">${emailLinks(s.note)}</p>`:''}${s.after?`<p>${esc(s.after)}</p>`:''}${s.image||s.images?shots.map((shot,k)=>`<figure class="shot"><button class="shot-button" type="button" data-image="${i}" data-shot="${k}" aria-label="${esc(c.zoom+': '+shot.alt)}">${picture(shot,i,k)}</button><figcaption>${esc(c.zoom)}</figcaption></figure>`).join(''):''}${gi===1||gi===2?`<a class="section-back" href="#${g.id}">${esc(c.back)} ↑</a>`:''}</section>`}).join('')}<a class="screen-back" href="#top">${esc(c.back)} ↑</a></div>`}).join('');
if(!isPreview&&pageIndex>=2)document.querySelector('#sections').innerHTML=`<section class="step development-message"><span class="step-num">${String(pageIndex+1).padStart(2,'0')} · ${esc(c.nav[pageIndex])}</span><h2>${esc(c.development)}</h2><p>${esc(c.developmentText)}</p><a href="index.html">${esc(c.nav[0])}</a></section>`;document.querySelector('#close-zoom').textContent=c.close;}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem('commitment-guide-language',b.dataset.lang)}catch{}render(b.dataset.lang)}));
const dialog=document.querySelector('#zoom');
document.querySelector('#sections').addEventListener('click',e=>{const b=e.target.closest('[data-image]');if(!b)return;const i=Number(b.dataset.image);const item=b.dataset.item!==undefined;const k=Number(item?b.dataset.item:b.dataset.shot)||0;const s=copy[current].steps[i];const shot=item?s.items[k][2]:(s.images?s.images[k]:s);document.querySelector('#zoom-caption').textContent=shot.alt;document.querySelector('#zoom-content').innerHTML=picture(shot,i,k,item);dialog.showModal();});
document.querySelector('#close-zoom').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
render(current);
