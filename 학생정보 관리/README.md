# 학생정보 관리

### c언어 구현

````
#define _CRT_SECURE_NO_WARNINGS
#define N 10
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct student {
    int id;
    char name[10];
};



struct node {
    int id;
    char name[10];
    struct node* next;
};

struct node *dropList;


int searchList(struct student* list, int n, int length, int id) {
    int i;
    if (length < 0) return(0);
    for (i = 0; i <= length; i++) {
        if (id < list[i].id) return(i);
    }
    return (i);
}

void insertList(struct student* list, int n, int* length, int pos, int id, char* name) {
    int i;
    if (pos >= n) return;
    for (i = *length; i >= pos; i--) {
        list[i + 1].id = list[i].id;
        strcpy(list[i + 1].name, list[i].name);
    }
    list[pos].id = id;
    strcpy(list[pos].name, name);
    *length = *length + 1;
    return;
}

int checkList(struct student* list, int length, int id) {
    int i;
    if (length < 0) return(0);
    for (i = 0; i <= length; i++) {
        if (id == list[i].id) {
            return i;
        }
    }
    return -1;
}



void addToDropList(int dropStudentId, char dropStudentName[10]) {
    // 새로운 노드 생성
    struct node* dropStudent = (struct node*)malloc(sizeof(struct node));
    dropStudent->id = dropStudentId;
    strcpy(dropStudent->name, dropStudentName);
    dropStudent->next = NULL;

    // 연결 리스트가 비어있을 경우
    if (dropList == NULL) {
        dropList = dropStudent;
    }
    // 연결 리스트가 비어있지 않을 경우
    else {
        struct node* curr = dropList;
        struct node* prev = NULL;
        // 연결 리스트를 순회하면서 id가 새로운 노드의 id보다 큰 노드를 찾음
        while (curr != NULL && curr->id < dropStudentId) {
            prev = curr;
            curr = curr->next;
        }
        // prev와 curr 사이에 새로운 노드 삽입
        if (prev == NULL) {
            dropStudent->next = dropList;
            dropList = dropStudent;
        }
        else {
            prev->next = dropStudent;
            dropStudent->next = curr;
        }
    }
}



void deleteList(struct student* list, int* length, int pos) {

    addToDropList(list[pos].id, list[pos].name);

    for (int i = pos; i < (*length) - 1; i++) { // 수정된 부분
        list[i].id = list[i + 1].id;
        strcpy(list[i].name, list[i + 1].name);
    }
    *length = *length - 1;


    return;
}

void printDropList() {
    printf("수강철회자 리스트:\n");
    struct node* curr = dropList;
    int i = 0;
    while (curr != NULL) {
        printf(" [%d] 학번 : %d 이름 : %s\n", i, curr->id, curr->name);
        curr = curr->next;
        i++;
    }
    printf("\n");
}


// 프로그램이 종료될 때 dropList에 저장된 정보를 파일에 쓰는 함수
void saveDropListToFile() {
    FILE* fp = fopen("./drop.dat", "w");  // drop.dat 파일을 쓰기 모드로 열기
    if (fp == NULL) {
        printf("파일을 열 수 없습니다.\n");
        return;
    }

    struct node* curr = dropList;
    while (curr != NULL) {  // dropList를 순회하면서 파일에 정보 쓰기
        fprintf(fp, "%d %s\n", curr->id, curr->name);
        curr = curr->next;
    }

    fclose(fp);  // 파일 닫기
}


int main(void) {
    struct student stu[N];
    int length = -1, id, i = 0, pos;
    char ch, name[20];
    FILE* f1, * f2;
    f1 = fopen("./apply.dat", "r");
    if (f1 == NULL) {
        printf("apply.dat 파일 오픈 불가 \n");
        return 1;
    }
    else {
        // 파일에서 데이터를 읽어옴
        while (fscanf(f1, "%d %s", &id, name) != EOF) {
            length++;
            stu[length].id = id;
            strcpy(stu[length].name, name);
        }
        fclose(f1); // 파일 닫음
    }

    f2 = fopen("./drop.dat", "r");
    if (f2 == NULL) {
        printf("drop.dat 파일 오픈 불가 \n");
        return 1;
    }
    else {
        // 파일에서 데이터를 읽어옴
        while (fscanf(f2, "%d %s", &id, name) != EOF) {
            // 연결 리스트에 추가
            addToDropList(id, name);
        }
        fclose(f2); // 파일 닫음
    }



    do {
        system("cls");
        printf("\n----------------------------------------\n");
        printf(" 수강신청자 및 수강포기자 관리\n");
        printf("----------------------------------------\n");
        printf(" 1. 수강 신청 ('1')\n");
        printf(" 2. 수강철회 신청 ('2')\n");
        printf(" 3. 수강신청자 리스트 확인('3')\n");
        printf(" 4. 수강철회자 리스트 확인('4')\n");
        printf(" 5. 프로그램 종료 ('q')\n");
        printf("----------------------------------------\n");
        printf("\n\n 원하시는 서비스를 선택하세요. ");
        ch = getche();
        switch (ch) {
        case '1': system("cls"); printf("\n\n 요청하신 수강신청을 처리중 입니다. \n ");
            printf("\n 수강신청자 학번 : "); scanf("%d", &id);
            printf("\n 수강신청자 이름 : "); scanf("%s", name);
            pos = searchList(stu, N, length, id);
            if (pos >= N) printf("\n\n 죄송합니다. 수강신청이 마감되었습니다.\n\n");
            else {
                insertList(stu, N, &length, pos, id, name);
                printf("\n\n 요청하신 수강신청을 처리했습니다. \n\n");
            }
            break;
        case '2': system("cls");
            if (length == -1) {
                printf("\n\n 수강신청자가 없습니다. \n\n");
                break;
            }
            printf("\n\n 요청하신 수강철회신청을 처리중 입니다. \n ");
            printf("\n 수강철회자 학번 : "); scanf("%d", &id);
            pos = checkList(stu, length, id);
            if (pos == -1) {
                printf("\n 해당 학번을 가진 수강신청자가 없습니다.\n\n");
                break;
            }
            deleteList(stu, &length, pos);
            printf("\n\n 요청하신 수강철회신청을 처리했습니다. \n\n");

            break;

        case '3': system("cls");
            if (length == -1) printf("\n\n 수강신청자가 없습니다. \n\n");
            else {
                printf("\n\n 수강신청자 수 : %d 명 \n", length + 1);
                printf("\n\n 수강신청자 명단은 다음과 같습니다. \n\n");
                for (i = 0; i <= length; i++)
                    printf(" [%d] 학번 : %d 이름 : %s\n", i, stu[i].id, stu[i].name);
            }
            break;
        case '4':
            system("cls");
            printDropList();
            printf("\n\n 수강철회자 리스트를 확인했습니다. \n\n");
            break;
        case 'q':
            system("cls");
            f1 = fopen("./apply.dat", "w");
            for (i = 0; i <= length; i++) fprintf(f1, "%d %s\n", stu[i].id, stu[i].name);
            fclose(f1);
            atexit(saveDropListToFile);  // 프로그램이 종료될 때 saveDropListToFile 함수 호출
            printf("\n\n 프로그램을 종료합니다. \n\n"); break;
        default:
            system("cls");
            printf("\n\n 키를 잘못 입력했습니다.\n");
            printf("화면의 설명을 보신 후, '1'~'4' 또는 'q'를 입력해 주세요 \n\n");
        }
        printf("\n\n 임의의 키를 눌러 주세요 ");
        getche();
    } while (ch != 'q');
}
````
