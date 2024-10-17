import { Candidate } from "@/types/Candidate"
import { DeepNullable } from "@/types/utils/DeepNullable"
import { CardTitle, TextInfo, TitleLabel } from "../__atoms/TextBlocks/TextBlocks"
import Value from "../__atoms/Value/Value"

type TProps = {
    employee: DeepNullable<Candidate>
}
export const ShortDescription = ({employee}:TProps) => {
    return (
        <div>
                  <div className="text-lg text-gray-500 dark:text-gray-400 font-bold mb-2">
                    <Value value={employee?.professional_roles} />
                    {/*} Руководитель отдела продаж, специалист ВЭД, ведущий менеджер по работе с клиентами, КАМ */}
                  </div>
                  {(employee.last_name || employee.first_name || employee.middle_name) && (
                    <CardTitle>
                      <Value value={employee.last_name} /> <Value value={employee.first_name} />{' '}
                      <Value value={employee.middle_name} />
                    </CardTitle>
                  )}
                  <div>
                    <TitleLabel>Возраст:</TitleLabel>{' '}
                    <TextInfo>
                      <Value value={employee.age} />
                    </TextInfo>
                  </div>
                  <div>
                    <TitleLabel>Пол:</TitleLabel>{' '}
                    <TextInfo>
                      <Value value={employee.gender} />
                    </TextInfo>
                  </div>
                  <div>
                    <TitleLabel>Зарплата:</TitleLabel>{' '}
                    <TextInfo>
                      <Value value={employee.salary} />
                    </TextInfo>
                  </div>
                </div>
    )
}